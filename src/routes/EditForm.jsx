import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function EditForm(){
    const { id } = useParams()

    return (
        <div>
            <p>Edição do componente { id }</p>
            <button><Link to={`/products`}>Voltar</Link></button>
        </div>
    )
}