import { useState, useEffect } from 'react'
import TabelaProdutos from '../Components/TabelaProdutos'

export default function Product(){
    
    const [products, setProducts] = useState([])
    
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
    

    return (
        <>
        <TabelaProdutos produtos={products} editProduct={getProductById} deleteProduct={deleteProduct} />
        </>
        )
}