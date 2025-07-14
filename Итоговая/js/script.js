const bigImage = document.querySelector("#big-image")
const img1 = document.querySelector("#imag-1")
const img2 = document.querySelector("#imag-2")
const img3 = document.querySelector("#imag-3")
const img4 = document.querySelector("#imag-4")
const img5 = document.querySelector("#imag-5")
const img6 = document.querySelector("#imag-6")

img1.addEventListener("click", () => {
    bigImage.src = img1.src
})
img2.addEventListener("click", () => {
    bigImage.src = img2.src
})
img3.addEventListener("click", () => {
    bigImage.src = img3.src
})
img4.addEventListener("click", () => {
    bigImage.src = img4.src
})
img5.addEventListener("click", () => {
    bigImage.src = img5.src
})
img6.addEventListener("click", () => {
    bigImage.src = img6.src
})