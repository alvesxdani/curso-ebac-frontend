// Data do Dia dos Finados (2 de novembro do mesmo ano)
const targetDate = new Date(new Date().getFullYear(), 10, 2) // Mês 10 representa novembro (janeiro é 0-based)

function updateCountdown() {
  const currentDate = new Date()
  const timeDifference = targetDate - currentDate

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    )
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

    document.getElementById('countdown').innerHTML = `
          <p>${days} dias 
          ${hours} horas 
          ${minutes} minutos 
          ${seconds} segundos</p>
        `
  } else {
    document.getElementById('countdown').innerHTML =
      '<p>O Dia dos Finados chegou!</p>'
  }
}

// Atualizar a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000)

// Inicializar a contagem regressiva imediatamente ao carregar a página
updateCountdown()
