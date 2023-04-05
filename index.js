function currencyCalculator(){
    fetch('https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd.json')
        .then(res => res.json())
        .then(rates => console.log(rates))
}
currencyCalculator()