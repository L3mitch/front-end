import  './App.css'
import TabelaProdutos from './components/TabelaProdutos'

function App() {
  const produtos = [
    {
        id: 1,
        nome: 'Morango',
        preco: 'R$ 50,00',
        estoque: 20
    },
    {
        id: 2,
        nome: 'Doce de banana',
        preco: 'R$ 35,00',
        estoque: 15
    },
    {
        id: 3,
        nome: 'Pitaya',
        preco: 'R$ 75,00',
        estoque: 30
    },
    {
        id: 4,
        nome: 'Refri',
        preco: 'R$ 100,00',
        estoque: 10
    },
    {
        id: 5,
        nome: 'Chips',
        preco: 'R$ 60,00',
        estoque: 25
    },
    {
        id: 6,
        nome: 'Mamão',
        preco: 'R$ 90,00',
        estoque: 5
    }

];
  return (
<>

  <TabelaProdutos produtos={produtos} />
    </>
  )
}

export default App
