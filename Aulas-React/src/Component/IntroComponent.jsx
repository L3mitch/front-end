import ChildComponent from "./ChildComponent"

// export default function IntroComponent() {
export default function IntroComponent() {
    const gatofeio = "https://i.pinimg.com/236x/db/6a/19/db6a19d6379a998d95789da988248a16.jpg"
    const a = 5, b = 2, nome = 'Rodrigo'
    const aluno = {
        nome: 'João',
        email: 'joao@emailjoao.joao'
    }
    return (
    <>
    <h2>Componente de introdução</h2>
    <h3>Template expressions</h3>
    <p>{nome}, o produto entre {a} e {b} é {a * b}</p>
    <p>Aluno {aluno.nome} <br />E-mail: {aluno.email}</p>
    <button><img src={gatofeio} alt="" /></button>
    <ChildComponent />
    </>
  )
}

// export default IntroComponent