import {
  ChangeEvent,
  useState,
} from 'react'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import './globals.css'
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert'
import { Sparkles, XCircle } from 'lucide-react'

function App() {
  const [altura, setAltura] = useState<number>(0)
  const [peso, setPeso] = useState<number>(0)
  const [imc, setImc] = useState<number | null>(null)
  const [classification, setClassification] = useState<string>('')
  const [erro, setErro] = useState<string | null>(null)

  function handleChangePeso({ target }: ChangeEvent<HTMLInputElement>) {
    setPeso(target.valueAsNumber)
    if (isNaN(target.valueAsNumber)) setPeso(0)
    }

  function handleChangeAltura({ target }: ChangeEvent<HTMLInputElement>) {
    setAltura(target.valueAsNumber)
    if(isNaN(target.valueAsNumber)) setAltura(0)
  }

  function calculaIMC() {
    const result = (peso / (altura * altura)) * 10000;
    if(peso || altura) {
      setImc(result)
      setErro(null)
    }

    if(peso <= 0 || altura <= 0) setErro('Digite corretamente os campos')
    if (!peso || !altura) setErro('Digite corretamente os campos')

    if (result < 18.5) {
      setClassification(`Abaixo do Peso`);
    } else if (result >= 18.5 && result < 23.9) {
      setClassification(`Normal`);
    } else if (result >= 24 && result <= 27.9) {
      setClassification(`Excesso de Peso `);
    } else if (result > 28) {
      setClassification(`Obesidade`);
    }
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="h-[100vh] flex justify-center items-center">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>IMC</CardTitle>
            <CardDescription className="font-bold">
              Calcule aqui seu IMC:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 mb-6">
              <Label>Sua altura:</Label>
              <Input
                type="number"
                placeholder="Ex.: 170"
                onChange={handleChangeAltura}
                value={altura}
                required
              ></Input>
            </div>
            <div className="flex flex-col gap-4">
              <Label>Seu peso:</Label>
              <Input
                type="number"
                placeholder="Ex.: 56"
                onChange={handleChangePeso}
                value={peso}
                required
              ></Input>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            {imc && (
              <Alert>
                <Sparkles className="mr-9 h-5 w-5 stroke-yellow-300" />
                <AlertTitle>Resultado: {classification} </AlertTitle>
                <AlertDescription>
                  <p>Seu IMC é de {imc.toFixed(1)}</p>
                </AlertDescription>
              </Alert>
            )}
            {erro && (
              <Alert>
                <XCircle className="mr-9 h-5 w-5 stroke-red-500" />
                <AlertTitle>Erro: </AlertTitle>
                <AlertDescription>
                  <p>{erro}</p>
                </AlertDescription>
              </Alert>
            )}
            <Button onClick={calculaIMC}>Calcular</Button>
          </CardFooter>
        </Card>
      </main>
    </ThemeProvider>
  )
}

export default App
