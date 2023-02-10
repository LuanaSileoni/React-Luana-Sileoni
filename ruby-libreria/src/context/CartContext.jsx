import { createContext, useContext, useState } from "react";

// creamos un contexto lo exportamos 

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

// no useEffect nada de nada  

export const CartContextProvider = ({children})=>{
    // estados y funciones globales del cart 
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (newProduct) =>{
        // isInCart 
        const idx = cartList.findIndex(product => product.id === newProduct.id)

        if (idx !== -1 ) {
            // si está 
            cartList[idx].cantidad = cartList[idx].cantidad + newProduct.cantidad // no produce un nuevo render 
            setCartList([ ...cartList ]) 
            
        } else {
            setCartList( [ ...cartList, newProduct ] )            
        }

        // [ ...cartList, product ] tipo push
        // revisar si el prod esta en el cart 
    }

    // cantidad total 
    const cantidadTotal = () => cartList.reduce(( count, objProducto ) =>  count += objProducto.cantidad, 0)
    
    //precio total
    const precioTotal = () => cartList.reduce(( count, objProducto ) =>  count += (objProducto.cantidad * objProducto.price), 0)


    //eliminar por item 
    const eliminarItem = id => setCartList( cartList.filter(product => product.id !== id) )

    const vaciarCarrito = () => {
        setCartList([])
    }
    
    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}
