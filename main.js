const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", function() {
    //console.log("You have submitted a new task.");
    const input = document.getElementById("new-task").value;
    if (input) {
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
    console.log("hello");
}