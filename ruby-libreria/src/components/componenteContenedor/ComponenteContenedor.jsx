import Contactenos from "../Contactenos/Contactenos"
import Titulo from "../Titulo/Titulo"


function ComponenteContenedor ({saludo}) {
    return (
        <div>
            <h2>Esto es la prop de componente contenedor: {saludo}</h2>
            <Titulo />
            <Contactenos />
        </div>
    )
}

export default ComponenteContenedor
