console.log(document);

const title = document.getElementById("title");

const text = document.querySelector(".text");

console.log(title);
console.log(text);

// шаг 4

title.textContent = "DOM изменён через JS!";

title.style.color = "blue";
title.style.backgroundColor = "#f0f0f0";
title.style.padding = "10px";

text.style.fontSize = "18px";
text.style.fontStyle = "italic";
text.style.color = "darkgreen";

// шаг 5
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    alert("Кнопка нажата!");
    btn.style.backgroundColor = "#4CAF50";
    btn.style.color = "white";
});
// шаг 6
const input = document.getElementById("nameInput");
const button = document.getElementById("showName");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        output.textContent = `Привет, ${input.value}!`;
        output.style.color = "green";
    } else {
        output.textContent = "Пожалуйста, введите имя!";
        output.style.color = "red";
    }
});
// шаг 7
const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
    input.value = "";
    output.textContent = "";
    output.style.color = "";
    input.focus();
});