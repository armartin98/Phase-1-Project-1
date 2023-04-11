function currency(){
    fetch('https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd.json')
        .then(res => res.json())
        .then(rates => {
            const exchangeType = document.querySelector('#exchangeType')
            const returnValue = document.querySelector('#returnValue')
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

                const exchangeDisplay = document.createElement('p')
                exchangeDisplay.innerText = `${usdAmount} USD is equal to ${exchangeValue.toFixed(2)} ${exchangeType}`
                returnValue.appendChild(exchangeDisplay)
            })
            const darkLight = document.querySelector('#darkLight')
            
            darkLight.addEventListener('click', () => {
                const element = document.body;
                element.classList.toggle("darkMode")
            })
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Space') {
                    form.reset()
                    while (returnValue.firstChild){
                        returnValue.removeChild(returnValue.firstChild)
                    }
                }
            })
        })
}
currency()


