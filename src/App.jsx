import  './App.css'
// import TabelaProdutos from './components/TabelaProdutos'
import Formulario from 'C:\front-end\src\components\Formulario.jsx';

function App() {
//   const produtos = [
//     {
//         id: 1,
//         nome: 'Morango',
//         preco: 'R$ 50,00',
//         estoque: 20
//     },
//     {
//         id: 2,
//         nome: 'Doce de banana',
//         preco: 'R$ 35,00',
//         estoque: 15
//     }
// ];
const [products, setProducts] = useState([])
const [id, setId] = useState(1)
const [name, setName] = useState("")
const [preco, setPrice] = useState("")
const [stock, setStock] = useState("")
const [edit, setEditing] = useState(false)

const clearForm = () => {
    setName("")
    setPrice("")
    setStock("")
}

const saveProduct = (e) => {
    e.preventDefault();
    if(!edit){
        setId(v => v + 1)
        setProducts([...products, {id, name, preco, stock}])
    }

    if(edit){
        const productIndex = products.findIndex(product => product.id === id)
        products[productIndex] = {id, name, preco, stock}
        setProducts([products])
        setEdit(false)
    }
    clearForm()
}

const deleteProduct = (id) => {
    setProducts(products.filter(prod => prod.id !== id))
}

const editProduct = (id) => {
    const product = products.find(prod => prod.id === id)
    setId(product.id)
    setName(product.name)
    setPrice(product.price)
    setStock(product.stock)
    setEdit(true)
}

const handleName = (e) => {setName(e.target.value)}
const handlePrice = (e) => {setPrice(e.target.value)}
const handleStock = (e) => {setStock(e.target.value)}
  return (
  <>
  {/* <TabelaProdutos produtos={produtos} /> */}
  <Formulario name={name} preco={preco} stock={stock} handleName={handleName} handlePrice={handlePrice} handleStock={handleStock} />
  </>
  )
}

export default App
