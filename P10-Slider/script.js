const slides = document.querySelectorAll('.slide');
let counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    })
const goPrev = () => {
    counter--

    slideImage()
}
const goNext = () => {
    counter++
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
            if (counter > 4) {
                slide.style.display = none
            }
            else if (counter < 1) {
                slide.style.display = none 
            }
        })
}