import React from 'react'
import "./TabelaProdutos.module.css"

const TabelaProdutos = ({ produtos, editProduct, deleteProduct }) => {
    return (
        <div>
            <h2>Tabela de Produtos</h2>
            <table className="tabela-produtos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque (kg)</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, index) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.estoque}</td>
                            <td className="actions">
                                <button onClick={() => editProduct(produto.id)}>Editar</button>
                                <button onClick={() => deleteProduct(produto.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaProdutos;