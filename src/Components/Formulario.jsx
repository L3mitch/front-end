import "./Formulario.module.css"

export default function Formulario({saveProduct, handleName, handlePrice, handleStock, name, price, stock}) {
    return (
        <>
        <div className="container">
            <h2>Cadastro de Produtos</h2>
                <form onSubmit={saveProduct}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" value={name} onChange={(e) => handleName(e)}/>

                    <label htmlFor="price">Preço:</label>
                    <input type="number" name="price" value={price} onChange={(e) => handlePrice(e)}/>

                    <label htmlFor="stock">Estoque:</label>
                    <input type="number" name="stock" value={stock} onChange={(e) => handleStock(e)}/>

                    <input type="submit" value="Cadastrar"/>
                </form>
        </div>
        </>
    )
}