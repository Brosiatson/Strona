const SCORE = document.querySelector(".iloscpkt")
const CLICKER = document.querySelector(".kliker")

let score = localStorage.getItem("score") || "0"

SCORE.innerText = localStorage.getItem("score")

CLICKER.addEventListener("click", () => {
    score++;
    localStorage.setItem("score", score)
    SCORE.innerText = localStorage.getItem("score")
})