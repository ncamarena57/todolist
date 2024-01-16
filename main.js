function submit() {
    alert("Hello world");
}

const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", function() {
    console.log("You have submitted a new task.");
});