<script>
import { reactive } from 'vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Button,
  },
  setup() {
    const states = reactive({
      number1: 0,
      number2: 0,
      operacao: 'somar',
      resultado: null,
    })

    const selectedOption = 'somar' // Defina selectedOption fora do objeto states

    const handleNumber1 = (event) => {
      states.number1 = Number(event.target.value)
    }

    const handleNumber2 = (event) => {
      states.number2 = Number(event.target.value)
    }

    const retornaOpcao = () => {
      states.operacao = selectedOption // Acesse selectedOption diretamente
    }

    const calcular = () => {
      let result = 0
      if (states.operacao === 'somar') {
        result = states.number1 + states.number2
      } else if (states.operacao === 'subtrair') {
        result = states.number1 - states.number2
      } else if (states.operacao === 'multiplicar') {
        result = states.number1 * states.number2
      } else if (states.operacao === 'dividir') {
        result = states.number1 / states.number2
      } else {
        throw new Error('Operação inválida')
      }
      states.resultado = `O resultado é ${result}`
    }

    return {
      states,
      selectedOption, // Retorne selectedOption no objeto de retorno
      handleNumber1,
      handleNumber2,
      retornaOpcao,
      calcular,
    }
  },
}
</script>

<template>
  <div class="flex-row justify-content-center align-items-center">
    <div class="container border rounded p-3 mt-3">
      <div class="text-center">
        <div class="row mb-4">
          <div class="col">
            <label for="number1" class="form-label">Número 1:</label>
            <input
              type="number"
              name="number1"
              class="form-control"
              @keyup="handleNumber1"
              :value="states.number1"
            />
          </div>
          <div class="col">
            <label for="number2" class="form-label">Número 2:</label>
            <input
              type="number"
              name="number2"
              class="form-control"
              @keyup="handleNumber2"
              :value="states.number2"
            />
          </div>
          <div class="col">
            <label for="calculo" class="form-label">Operação:</label>
            <select
              class="form-select"
              v-model="selectedOption"
              @change="retornaOpcao()"
            >
              <option value="somar" selected="selected">Somar</option>
              <option value="subtrair">Subtrair</option>
              <option value="multiplicar">Multiplicar</option>
              <option value="dividir">Dividir</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="bg-light p-2 rounded-2 mb-4" v-if="states.resultado">
            {{ states.resultado ? states.resultado : '' }}
          </div>
        </div>
        <Button @click="calcular">Resultado</Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
