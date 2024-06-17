import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function EditForm(){
    const { id } = useParams()

    return (
        <div>
            <h2>Cadastro de Produtos</h2>
                <form onSubmit={saveProduct}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" value={name} onChange={(e) => handleName(e)}/>

                    <label htmlFor="price">Preço:</label>
                    <input type="number" name="price" value={price} onChange={(e) => handlePrice(e)}/>

                    <label htmlFor="stock">Estoque:</label>
                    <input type="number" name="stock" value={stock} onChange={(e) => handleStock(e)}/>

                    <input type="submit" value="Cadastrar"/>
                    <button style={{float: 'right'}}><Link to={'/products'}>Voltar</Link></button>
                </form>
            <p>Edição do componente { id }</p>
        </div>
    )
}