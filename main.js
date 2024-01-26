const submitBtn = document.querySelector(".submit");
let list = [];

submitBtn.addEventListener("click", function() {
    //console.log("You have submitted a new task.");
    const input = document.getElementById("new-task").value;
    if (input) {
        list.push(input);
        console.log(list);
        const li = document.createElement("li");
        li.innerText = input;
        const ul = document.querySelector(".list");
        ul.appendChild(li);
        resetInput();
    }
});

function resetInput() {
    document.getElementById("new-task").value = "";
}

//let listItem = document.querySelector("li");

document.addEventListener("click", function(e){
    const target = e.target.closest("li"); // Or any other selector.
    if(target){
        if (!target.style.textDecoration || target.style.textDecoration === "none") {
            target.style.textDecoration = "line-through";
        } else {
            target.style.textDecoration = "none";
        }
    }
});

function clearList() {
    const ul = document.querySelector(".list");
    ul.innerHTML = "";
    list = [];
}

function saveList() {
    if (list.length !== 0) {
        let savedList = list;
        let name = prompt("What would you like to name this list?");
        console.log("Your list " + name + " includes these items: " + savedList);
    } else {
        alert("List is empty.");
    }
}