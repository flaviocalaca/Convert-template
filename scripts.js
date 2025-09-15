// Cotação de moedas do dia
const USD = 5.3
const EUR = 6.2
const GBP = 7.1

// obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// manipulando o InputDeviceInfo amount para receber somente numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit no formulario
form.onsubmit = (event) => {
  event.preventDefault()
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break

  }
  function convertCurrency(amount, price, symbol) {
    try {
      // exibindo a cotação da moeda
      description.textContent = `${symbol} 1 = ${formatCurrecyBRL(price)}`

      // aplica a classe que exibe o resultado
      footer.classList.add("show-result")
    } catch (error) {
      // remove a classe que exibe o resultado
      footer.classList.remove("show-result")
      console.log(error)
      alert("Não foi possivel converter a moeda, tente mais tarde.")
    }
  }
}

// formata a moeda em Real Brasileiro
function formatCurrecyBRL(value) {
  // Converte para numero para ultilizar o toLocaleString
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}
