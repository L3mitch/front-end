import { Link } from "react-router-dom"

export default function Product(){
    const products = [
        {id: 1, name: 'Uva', price: 100},
        {id: 2, name: 'Bomba', price: 20},
        {id: 3, name: 'Melão', price: 67},
        {id: 4, name: 'Ogiva Nuclear', price: 2},
    ]
    return(
        <div>
            <h3>Produtos</h3>
            {products.map((prod) => (
                <ul key={prod.id} style={{listStyle: 'none'}}>
                    <li>Nome: {prod.name}</li>
                    <li>Preço: R$ {prod.price}</li>
                    <li><Link to={`/products/${ prod.id}/info`}>Mais informações</Link></li>
                    <li><hr /></li>
                </ul>
            ))}
        </div>
    )
}