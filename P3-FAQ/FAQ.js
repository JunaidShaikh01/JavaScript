//const accordian = document.getElementsByClassName('container-content')
const accordian = document.getElementsByClassName('container-content')
console.log(accordian);

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener('click', function () {
        this.classList.toggle('active');

    })
}
