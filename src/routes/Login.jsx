import { useState, useEffect } from 'react'

export default function Login(){
    
    const [usuarios, setUsers] = useState([])
    const [nome, setUsername] = useState("")
    const [senha, setPassword] = useState("")
    const [edit, setEdit] = useState(false)
    
    const url = 'http://localhost:3000/users'
    
    useEffect(() => {
        //Lista todos os produtos:
        const getUserLists = async() => {
            const res = await fetch(url)
            const data = await res.json()
            setUsers(data)
        }
    
        getUserLists();
    
    }, [])

    const clearForm = () => {
        setUsername("")
        setPassword("")
    }
    
    
    const saveUsername = async (e) => {
        e.preventDefault();
        const saveRequestParams= {
            method: edit ? "PUT" : "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({nome, senha})
        }
        //  Cria url para buscar todos ou apenas um produto
        const save_url = edit ? url + `/${id}` : url;
        //  Faz a requisição http
        const res = await fetch(save_url, saveRequestParams);
        // Se for cadastro de produto novo:
        if(!edit) {
            const newUser = await res.json();
            //  Atualização da tabela:
            setUsers((prevUser) => [...prevUser, newUser])
        }
        //  Se for edição/atualização de produto ja cadastrado:
        if(edit) {
            const editedUser = await res.json();
            //  Atualização da tabela:
            const editedUserIndex = products.findIndex(prod => prod.id === id)
            usuarios[editedUserIndex] = editedUser;
            setUsers(usuarios)
        }
        clearForm()
        setEdit(false)
    }
    
    
    const handleUsername = (e) => {setUsername(e.target.value)}
    const handlePassword = (e) => {setPassword(e.target.value)}

    return (
        <>
        <Login nome={nome} senha={senha} handleUsername={handleUsername} handlePassword={handlePassword} saveProduct={saveUsername}/>
        </>
        )
    }