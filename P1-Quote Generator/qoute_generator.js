let btn = document.querySelector('#new-Qoute');
let person = document.querySelector('.person');
let quote = document.querySelector('.quote');

const quotes = [{
    quote :'"The only way to do great work is to love what you do."',
    person : 'Steve Jobs'
} , 
{
    quote :'"In three words I can sum up everything Ive learned about life: it goes on."',
    person : 'Robert Frost'
} , 

{
    quote :'"Be yourself; everyone else is already taken."',
    person : 'Oscar Wilde '
} , 

{
    quote :'"The greatest glory in living lies not in never falling, but in rising every time we fall"',
    person : 'Nelson Mandela '
} , 

{
    quote :'"The future belongs to those who believe in the beauty of their dreams"',
    person : 'Eleanor Roosevelt '
} , 

{
    quote :'"It does not matter how slowly you go as long as you do not stop."',
    person : 'Confucius '
} , 

{
    quote :'"Success is not final, failure is not fatal: It is the courage to continue that counts."',
    person : 'Winston Churchill'
} , 

{
    quote :'"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart"',
    person : 'Helen Keller'
} , 

{
    quote :'"Two things are infinite: the universe and human stupidity; and Im not sure about the universe"',
    person : 'Albert Einstein '
} , 

{
    quote :'"I have not failed. I`ve just found 10,000 ways that won`t work."',
    person : ' Thomas Edison '
} , 

]

btn.addEventListener('click' , function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person
})