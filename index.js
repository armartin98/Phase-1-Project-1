function currency() {
    fetch('http://localhost:3000/currency')
        .then(res => res.json())
        .then(rates => {
            const exchangeType = document.querySelector('#exchangeType')
            const returnValue = document.querySelector('#returnValue')
            rates.map(exchange => {
                const option = document.createElement('option')
                option.value = exchange.abbreviation
                option.innerText = exchange.abbreviation
                exchangeType.appendChild(option)
            })
            const form = document.querySelector('#calculation')
            form.addEventListener('submit', (e) => {
                e.preventDefault()

                const usdAmount = document.querySelector('#usdAmount').value
                const exchangeType = document.querySelector('#exchangeType').value
                const selectedRate = rates.find(type => {
                    if (type.abbreviation === exchangeType) {
                        
                        const exchangeValue = usdAmount * type.exchangeRate

                        const exchangeDisplay = document.createElement('p')
                        exchangeDisplay.innerText = `${usdAmount} USD is equal to ${exchangeValue.toFixed(2)} ${exchangeType}, and is the official currency of these Countries/Territories: ${type.countryTerritory}`
                        returnValue.appendChild(exchangeDisplay)
                    }
                })
            })
            const darkLight = document.querySelector('#darkLight')

            darkLight.addEventListener('click', () => {
                const element = document.body;
                element.classList.toggle("darkMode")
            })
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Space') {
                    form.reset()
                    while (returnValue.firstChild) {
                        returnValue.removeChild(returnValue.firstChild)
                    }
                }
            })
        })
}
currency()


