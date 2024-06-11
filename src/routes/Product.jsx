import { useState, useEffect } from 'react'
import Formulario from '../Components/Formulario'
import TabelaProdutos from '../Components/TabelaProdutos'

export default function Product(){
    
    const [products, setProducts] = useState([])
    const [id, setId] = useState(1)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [edit, setEdit] = useState(false)
    
    const url = 'http://localhost:3000/products'
    
    useEffect(() => {
        //Lista todos os produtos:
        const getProductsLists = async() => {
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)
        }
    
        getProductsLists();
    
    }, [])

    const clearForm = () => {
        setName("")
        setPrice("")
        setStock("")
    }
    
    const getProductById = async(id) => {
        //  Faz a requisição http
        const res = await fetch(url + `?id=${id}`)
        const data = await res.json()
    
        // Carrega os dados no formulário para edição:
        setName(data[0].name)
        setPrice(data[0].price)
        setStock(data[0].stock)
        setId(data[0].id)
    
        //  Habilita edição:
        setEdit(true)
    }
    
    
    const saveProduct = async (e) => {
        e.preventDefault();
        const saveRequestParams= {
            method: edit ? "PUT" : "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name, price, stock})
        }
        //  Cria url para buscar todos ou apenas um produto
        const save_url = edit ? url + `/${id}` : url;
        //  Faz a requisição http
        const res = await fetch(save_url, saveRequestParams);
        // Se for cadastro de produto novo:
        if(!edit) {
            const newProduct = await res.json();
            //  Atualização da tabela:
            setProducts((prevProducts) => [...prevProducts, newProduct])
        }
        //  Se for edição/atualização de produto ja cadastrado:
        if(edit) {
            const editedProduct = await res.json();
            //  Atualização da tabela:
            const editedProductIndex = products.findIndex(prod => prod.id === id)
            products[editedProductIndex] = editedProduct;
            setProducts(products)
        }
        clearForm()
        setEdit(false)
    }
    
    const deleteProduct = async(id) => {
        //   Faz a requisição http
        const res = await fetch(url + `/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        })
    
        const deletedProduct = await res.json()
        //  Atualização da tabela:
        setProducts(products.filter(prod => prod.id !== deletedProduct.id))
    }
    
    const handleName = (e) => {setName(e.target.value)}
    const handlePrice = (e) => {setPrice(e.target.value)}
    const handleStock = (e) => {setStock(e.target.value)}

    return (
        <>
        <TabelaProdutos produtos={products} editProduct={getProductById} deleteProduct={deleteProduct} />
        <Formulario name={name} price={price} stock={stock} handleName={handleName} handlePrice={handlePrice} handleStock={handleStock} saveProduct={saveProduct}/>
        </>
        )

    // const products = [
    //     {id: 1, name: 'Uva', price: 100},
    //     {id: 2, name: 'Bomba', price: 20},
    //     {id: 3, name: 'Melão', price: 67},
    //     {id: 4, name: 'Ogiva Nuclear', price: 2},
    // ]
    // return(
    //     <div>
    //         <h3>Produtos</h3>
    //         {products.map((prod) => (
    //             <ul key={prod.id} style={{listStyle: 'none'}}>
    //                 <li>Nome: {prod.name}</li>
    //                 <li>Preço: R$ {prod.price}</li>
    //                 <li><Link to={`/products/${ prod.id}/info`}>Mais informações</Link></li>
    //                 <li><hr /></li>
    //             </ul>
    //         ))}
    //     </div>
    // )
}