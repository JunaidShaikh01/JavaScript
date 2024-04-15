


const exchageCurrencyBtn = document.getElementById('exchageCurrency');



exchageCurrencyBtn.addEventListener('click', function () {
    const inputNumber = parseInt(document.getElementById('inpuValue').value);
    const selectedInputCurrency = document.getElementById('selectedInputCurrency').value;
    const selectedOutputCurrency = document.getElementById('selectedOutputCurrency').value;

    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedInputCurrency}/${selectedOutputCurrency}.json`;
    fetch(url)
        .then(response => response.json())
        .then((result) => {
            console.log(result);
            const entries = Object.entries(result);
            const outputCurrency = entries[1][1];
            const finalCurrencyConvertion = outputCurrency * inputNumber;
            const currency = finalCurrencyConvertion.toFixed(2)
            console.log(currency + selectedOutputCurrency);
            document.getElementById('outputExchangeValue').textContent = `${currency + " " + selectedOutputCurrency}`
            let upperCaseSelectedInput = selectedInputCurrency.toUpperCase();
            document.getElementById('inputcountryResult').textContent = `${upperCaseSelectedInput}`
            let upperCaseSelectedOutput = selectedOutputCurrency.toUpperCase();
            document.getElementById('outputCountryResult').textContent = `${upperCaseSelectedOutput}`
        })
})

let usdToInrUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json`;
fetch(usdToInrUrl)
    .then(response => response.json())
    .then((result) => {
        let usdToInr = (result.inr).toFixed(2);
        if (usdToInr > 1) {
            document.getElementById('usdToInr').innerHTML = `${usdToInr} <i class="fa-solid fa-arrow-trend-down" style="color: #e03800;"></i>`
        }
        else {
            document.getElementById('usdToInr').innerHTML = `${usdToInr} <i class="fa-solid fa-arrow-trend-up" style="color: #0fdf0c;"></i>`
        }
    })


let usdToEurUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.json`;
fetch(usdToEurUrl)
    .then(response => response.json())
    .then((result) => {
        let usdToEur = (result.eur).toFixed(2);
        if (usdToEur > 1) {
            document.getElementById('usdToEur').innerHTML = `${usdToEur} <i class="fa-solid fa-arrow-trend-down" style="color: #e03800;"></i>`
        }
        else {
            document.getElementById('usdToEur').innerHTML = `${usdToEur} <i class="fa-solid fa-arrow-trend-up" style="color: #0fdf0c;"></i>`
        }
    })


let usdToKwdUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/kwd.json`;
fetch(usdToKwdUrl)
    .then(response => response.json())
    .then((result) => {
        let usdToKwd = (result.kwd).toFixed(2);
        if (usdToKwd > 1) {
            document.getElementById('usdToKwd').innerHTML = `${usdToKwd} <i class="fa-solid fa-arrow-trend-down" style="color: #e03800;"></i>`
        }
        else {
            document.getElementById('usdToKwd').innerHTML = `${usdToKwd} <i class="fa-solid fa-arrow-trend-up" style="color: #0fdf0c;"></i>`
        }
    })


let usdToUaeUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/aed.json`;
fetch(usdToUaeUrl)
    .then(response => response.json())
    .then((result) => {
        let usdToUae = (result.aed).toFixed(2);
        if (usdToUae > 1) {
            document.getElementById('usdToUae').innerHTML = `${usdToUae} <i class="fa-solid fa-arrow-trend-down" style="color: #e03800;"></i>`
        }
        else {
            document.getElementById('usdToUae').innerHTML = `${usdToUae}<i class="fa-solid fa-arrow-trend-up" style="color: #0fdf0c;"></i>`
        }
    })
