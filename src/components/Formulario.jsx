import "./Formulario.module.css"

export default function Formulario({saveProduct, handleName, handlePrice, handleStock, name, preco, stock}) {
    return (
        <>
        <div className="container">
            <h2>Cadastro de Produtos</h2>
                <form onSubmit={saveProduct}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" value={name} onChange={(e) => handleName(e)}/>

                    <label htmlFor="preco">Preço:</label>
                    <input type="number" name="preco" value={preco} onChange={(e) => handlePrice(e)}/>

                    <label htmlFor="estoque">Estoque:</label>
                    <input type="number" name="estoque" value={stock} onChange={(e) => handleStock(e)}/>

                    <input type="submit" value="Cadastrar"/>
                </form>
        </div>
        </>
    )
}