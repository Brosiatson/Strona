const LEFTBUTTON = document.querySelector("button.leftbutton")
const RIGHTBUTTON = document.querySelector("button.rightbutton")
const IMG = document.querySelector("img.kompaspic")
const TEXT = document.querySelector("h2.myp")

let firstimg = "foty/sgp.png"
let secondimg = "foty/myp.png"

console.log(LEFTBUTTON)
console.log(RIGHTBUTTON)
console.log(IMG)
console.log(TEXT)

RIGHTBUTTON.addEventListener("click", () => {
    if (IMG.alt === "kompas polityczny 1") {
        IMG.src = firstimg
        TEXT.innerText = "SoulGraphy:"
        IMG.alt = "kompas polityczny 2"
        RIGHTBUTTON.classList.add("buttonhidden")
        LEFTBUTTON.classList.remove("buttonhidden")
    }
})

LEFTBUTTON.addEventListener("click", () => {
    if (IMG.alt === "kompas polityczny 2") {
        IMG.src = secondimg
        TEXT.innerText = "MyPolitics:"
        IMG.alt = "kompas polityczny 1"
        LEFTBUTTON.classList.add("buttonhidden")
        RIGHTBUTTON.classList.remove("buttonhidden")
    }
})
