import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <span style={{padding: '8px'}}><Link to={'/'}>Login</Link> </span>
            <span style={{padding: '8px'}}><Link to={'/products'}>Produtos</Link> </span>
        </div>
    )
}