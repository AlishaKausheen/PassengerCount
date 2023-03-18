//let save = getElementById("save-el")
//let incerement = getElementById("increment-el")
let countText = document.getElementById("count-el")
let count = 0
let saveText = document.getElementById("savetext")

function increment() {
    count += 1
    countText.textContent = count
}

function save() {
    let countStr = count + "-"
    saveText.textContent += countStr;

    count = 0;
}