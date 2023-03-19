let text = document.querySelector("div"),
    input = document.querySelector("input");

input.addEventListener("input", () => {
    text.style.color = input.value;
    text.style.fontsize = input.value;
});