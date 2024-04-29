import React from 'react'

const TabelaProdutos = ({ produtos }) => {
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
                                <button>Editar</button>
                                <button>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaProdutos;