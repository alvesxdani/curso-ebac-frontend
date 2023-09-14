const valorA = document.getElementById('numForA');
const valorB = document.getElementById('numForB');
const forms = document.getElementById('forms');
const msgAviso = document.getElementById('msg-aviso');

function verificaValor() {
  let A;
  let B;

  valorA.addEventListener('change', ({ target }) => {
    A = target.value;
    console.log(A);
  });

  valorB.addEventListener('change', ({ target }) => {
    B = target.value;
    console.log(B);
  });

  forms.addEventListener('submit', (event) => {
    event.preventDefault();

    if (B > A) {
      msgAviso.innerText = 'O valor B é maior que o valor A!'

      msgAviso.classList.add('msg-success')
    } else {
      msgAviso.innerText = 'O valor A é maior que o valor B!'

      msgAviso.classList.add('msg-error')
    }
  });
}

verificaValor();
