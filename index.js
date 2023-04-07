function currency(){
    fetch('https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd.json')
        .then(res => res.json())
        .then(rates => {
            const exchangeType = document.querySelector('#exchangeType')
            const ratesArray = Object.keys(rates.usd)
            ratesArray.map(x => {
                const option = document.createElement('option')
                option.value = x
                option.innerText = x
                exchangeType.appendChild(option)
            })
            const form = document.querySelector('#calculation')
            form.addEventListener('submit', (e) => {
                e.preventDefault()

                const usdAmount = document.querySelector('#usdAmount').value
                const exchangeType = document.querySelector('#exchangeType').value
                const exchangeRate = rates.usd[exchangeType]
                console.log(exchangeRate)

                const exchangeValue = usdAmount * exchangeRate

                const returnValue = document.querySelector('#returnValue')
                const exchangeDisplay = document.createElement('p')
                exchangeDisplay.innerText = `${exchangeValue.toFixed(2)} ${exchangeType}`
                returnValue.appendChild(exchangeDisplay)
            })
        })
}
currency()
