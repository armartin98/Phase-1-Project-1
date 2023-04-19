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
                
                if (e.type === 'submit'){
                    const usdAmount = document.querySelector('#usdAmount').value
                    const exchangeType = document.querySelector('#exchangeType').value
                    rates.find(type => {
                        if (type.abbreviation === exchangeType) {
                            
                            const exchangeValue = usdAmount * type.exchangeRate
                            
                            const exchangeDisplay = document.createElement('p')
                            exchangeDisplay.innerText = `${usdAmount} USD is equal to ${exchangeValue.toFixed(2)} ${exchangeType}, and is the official currency of these Countries/Territories: ${type.countryTerritory}`
                            returnValue.appendChild(exchangeDisplay)
                        }
                    })
                    form.reset()
                }
            })

            const resultContainer = document.querySelector("#resultContainer")
            resultContainer.addEventListener('dblclick', () => {
                returnValue.innerHTML = ""
            })

            const darkLight = document.querySelector('#darkLight')
            darkLight.addEventListener('click', () => {
                const element = document.body;
                element.classList.toggle("darkMode")
            })
        })
}
currency()
