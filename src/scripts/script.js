const button = document.querySelector('.form__button')
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
})

button.addEventListener('click', () => {
  button.classList.add('form__button--sending')
})
