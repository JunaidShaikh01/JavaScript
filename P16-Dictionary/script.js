

const getAnswer = document.getElementById('showAnswer');
const bookIcon = document.getElementById('bookIcon');
getAnswer.addEventListener('click', function () {
    const inputWord = document.getElementById('inputWord').value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;
    bookIcon.style.display = "none"
    fetch(url)
        .then(response => response.json())
        .then((result) => {
            const grammer = result[0].meanings[0].partOfSpeech;
            document.getElementById('grammer').innerText = `Grammer :- ${grammer}`
            const defination = result[0].meanings[0].definitions[0].definition;
            document.getElementById('defination').textContent = `${defination}`

        });

})