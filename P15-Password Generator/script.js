const generateBtn = document.getElementById('generateBtn');
const length = 18;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+[]{}|\;:<>/?";
const numbers = "0123456789";

const allChars = upperCase + lowerCase + numbers +symbols;
generateBtn.addEventListener('click', function () {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

     let passwordBox = document.getElementById('password');

     passwordBox.value = password

})


const copy = document.getElementById('copyBtn');

copy.addEventListener('click' , function () {
    password.select();
    document.execCommand('copy');
})