
// hook es una función 
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../utils/gFetch'


export const ItemListContainer  = ( {saludo} ) => {  
    const [productos, setProductos] = useState([]) 
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(()=>{
        if (categoryId) {
            gFetch()// asincrinónico
                .then(respuestaPromesa => {
                    // ('Error generado a la fuerza')            
                   setProductos(respuestaPromesa.filter(items => items.categoria === categoryId))
                })        
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))               
            
        } else {
            gFetch()// asincrinónico
                .then(respuestaPromesa => {
                    //('Error generado a la fuerza')            
                   setProductos(respuestaPromesa)
                })        
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))               
        }
    }, [categoryId])
    
    
    console.log(categoryId) 
    // [1,2,3,4,5] -> map -> [ <li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>]
    return (
        <div className='container'> 
            {/* <h2>{saludo}</h2>  */}
            
            {   loading 
                ? 
                    <center>
                        <h1>La página se está cargando...</h1>
                    </center>
                :
                    <itemList productos = {productos}/>
                    
            }
        </div>
    )
}

