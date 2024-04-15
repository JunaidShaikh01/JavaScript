const male = document.getElementById('male');
const female = document.getElementById('female');

male.addEventListener('click', function () {
    male.style.border = '3px solid black';
    female.style.backgroundColor = '#1c1c1c'
    female.style.border = 'none'

})

female.addEventListener('click', function () {
    female.style.border = '3px solid black';

    male.style.backgroundColor = '#1c1c1c'
    male.style.border = 'none'
})



function getData() {
    const feet = document.getElementById('feetEnter').value;
    const inches = document.getElementById('inchesEnter').value;
    const weight = document.getElementById('weightEnter').value


    function checkValues() {
        if (feet == '' || inches == '' || weight == '' || (male.checked == false && female.checked == false)) {
            document.getElementById('result').textContent = 'Please Enter value'
        }
        else {
            getBmi()
        }
    }

    function feetToMeter() {
        const meterfeet = feet * 0.3048;
        const meterInches = inches * 0.0254
        const metervalue = meterfeet + meterInches;
        return metervalue
    }


    function getBmi() {
        const height = feetToMeter() * feetToMeter()
        const bmi = (weight / height);
        const bmiFinal = bmi.toFixed(2);
        return bmiFinal
    }

    if (getBmi() < 18.5) {
        document.getElementById('result').innerHTML = `Your BMI is ${getBmi()} <br> UNDERWEIGHT`
        document.querySelector('.outputSection').style.backgroundColor = 'yellow'
        document.querySelector('.outputSection').style.color = 'black'

    }
    if (getBmi() > 18.5 && getBmi() < 24.9) {
        document.getElementById('result').innerHTML = `Your BMI is ${getBmi()} <br> NORMAL`
        document.querySelector('.outputSection').style.backgroundColor = 'green'
        document.querySelector('.outputSection').style.color = 'black'
    }
    if (getBmi() > 25 && getBmi() < 29.9) {
        document.getElementById('result').innerHTML = `Your BMI is ${getBmi()} <br> OVERWEIGHT`
        document.querySelector('.outputSection').style.backgroundColor = 'orange'
        document.querySelector('.outputSection').style.color = 'black'
    }
    if (getBmi() > 30) {
        document.getElementById('result').innerHTML = `Your BMI is ${getBmi()} <br> OBESITY`
        document.querySelector('.outputSection').style.backgroundColor = 'red'
        document.querySelector('.outputSection').style.color = 'black'
    }

}

