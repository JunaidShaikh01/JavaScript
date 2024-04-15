let openBtn = document.querySelector('.open-btn')
console.log(openBtn);
let modelContainer = document.querySelector('.model-container');
console.log(modelContainer);
let closeBtn = document.querySelector('.close-btn');
console.log(closeBtn);

openBtn.addEventListener('click' , function () {
    modelContainer.style.display = 'block';
})

closeBtn.addEventListener('click' , function () {
    modelContainer.style.display = 'none';
})

window.addEventListener('click' , function (e) {
    if (e.target === modelContainer) {
        modelContainer.style.display = 'none';
    }
})