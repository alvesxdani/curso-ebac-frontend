<script>
import { reactive, watch } from 'vue'
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
      resultado: '',
    })

    const selectedOption = reactive({ value: 'somar' })

    const handleNumber1 = (event) => {
      states.number1 = Number(event.target.value)
      console.log('input 1: ' + states.number1)
    }

    const handleNumber2 = (event) => {
      states.number2 = Number(event.target.value)
      console.log('input 2: ' + states.number2)
    }

    const handleOperacao = ({ target }) => {
      console.log(target.value, selectedOption.value)
      selectedOption.value = target.value
    }

    const calcular = () => {
      let result = null
      if (selectedOption.value) {
        if (selectedOption.value === 'somar') {
          result = states.number1 + states.number2
        } else if (selectedOption.value === 'subtrair') {
          result = states.number1 - states.number2
        } else if (selectedOption.value === 'multiplicar') {
          result = states.number1 * states.number2
        } else if (selectedOption.value === 'dividir') {
          result = states.number1 / states.number2
        } else {
          throw new Error('Operação inválida')
        }
      }
      console.log(result)
      states.resultado = `O resultado é ${result}`
    }

    watch([() => states.number1, () => states.number2], () => {
      calcular()
    })

    return {
      states,
      selectedOption,
      handleNumber1,
      handleNumber2,
      handleOperacao,
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
              @input="handleNumber1"
              :value="states.number1"
            />
          </div>
          <div class="col">
            <label for="number2" class="form-label">Número 2:</label>
            <input
              type="number"
              name="number2"
              class="form-control"
              @input="handleNumber2"
              :value="states.number2"
            />
          </div>
          <div class="col">
            <label for="calculo" class="form-label">Operação:</label>
            <select
              class="form-select"
              v-model="selectedOption.value"
              @change="handleOperacao"
            >
              <option value="somar">Somar</option>
              <option value="subtrair">Subtrair</option>
              <option value="multiplicar">Multiplicar</option>
              <option value="dividir">Dividir</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="bg-light p-2 rounded-2 mb-4" v-if="states.resultado">
            {{ states.resultado }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
