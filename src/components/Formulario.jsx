import "C:\front-end\src\components\Formulario.module.css"

export default function Formulario({handleName, handlePrice, handleStock, name, preco, stock}) {
    return (
        <div class="container">
        <h2>Cadastro de Produtos</h2>
        <form onSubmit={saveProduct}>
            <label htmlfor="nome">Nome:</label>
            <input type="text" name="nome" value={name} onChange={(e) => handleName(e.target.value)}/>

            <label htmlfor="preco">Preço:</label>
            <input type="number" name="preco" value={preco} onChange={(e) => handlePrice(e.target.value)}/>

            <label htmlfor="estoque">Estoque:</label>
            <input type="number" name="estoque" value={stock} onChange={(e) => handleStock(e.target.value)}/>

            <input type="submit" value="Cadastrar"/>
        </form>
    </div>
    )
}