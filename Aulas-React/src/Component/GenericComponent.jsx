export default function GenericComponent({ children }) {
    return(
        <div>
            <h3>Passado pelo componente pai</h3>
            {children}
        </div>
    )
}