import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCoutn from "../ItemCount/ItemCoutn"

const ItemDetail = ({producto}) => {
    const [ isInCount, setIsInCount ] = useState(true)
    const { agregarCarrito } = useCartContext()

    const onAdd = (cant)=>{
        console.log(cant)
        // agragar al carrito 
        agregarCarrito( { ...producto, cantidad: cant } )
        setIsInCount(false)
    }  

    
    
    return (
        <div className="container mt-5">
            
            <div className="row"> 
                <div className="col-6"> 
                      <img src = {producto.foto} className='w-50'/>
                      <h2>Nombre: {producto.name}</h2> 
                      <h4>Categoría {producto.categoria}</h4> 
                      <h4>Precio {producto.price}</h4>
                       
                </div>
                <div className="col-6">
                    {isInCount ? 
                        <ItemCoutn onAdd={onAdd} />                    
                    : 
                        <>
                            <Link to={'/cart'}>
                                <button className="btn btn-outline-primary">Ir Al carrito</button>
                            </Link>
                            <Link to={'/'}>
                                <button className="btn btn-outline-success">Seguir comprando</button>
                            </Link>

                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
