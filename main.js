function submit() {
    alert("Hello world");
}

const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", function() {
    //console.log("You have submitted a new task.");
    const input = document.getElementById("new-task").value;
    const li = document.createElement("li");
    li.innerText = input;
    const ul = document.querySelector(".list");
    ul.appendChild(li);
    resetInput();
});

function resetInput() {
    document.getElementById("new-task").value = "";
}
