const SCORE = document.querySelector(".iloscpkt")
const CLICKER = document.querySelector(".kliker")
const WEAPON = document.querySelectorAll(".ak47img")
const FIRE = document.querySelectorAll(".plomien")

let score = localStorage.getItem("score") || "0"

SCORE.innerText = localStorage.getItem("score")

CLICKER.addEventListener("click", () => {
    for (i=0; i < WEAPON.length; i++){
        WEAPON[i].classList.add("ak47imgshot")
        FIRE[i].classList.add("plomienshot")
    }
    setTimeout(() => {
        for (i=0; i < WEAPON.length; i++){
            WEAPON[i].classList.remove("ak47imgshot")
            FIRE[i].classList.remove("plomienshot")
        }
    }, 100)
    score++;
    localStorage.setItem("score", score)
    SCORE.innerText = localStorage.getItem("score")
})