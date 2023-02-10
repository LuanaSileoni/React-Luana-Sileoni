
let productos = [
    { id: '1' ,
        categoria: 'libros',
        name: "producto 1",  
        price: 370,
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfq3VR_IyYPjyPH8N3GzOQs8G4sznoLkDg-g8XNgm1uu9jaXfcG8z1nRsJkHbbSeSQlw&usqp=CAU' },
   
    { id: '2' ,
        categoria: 'libros', 
        name: "producto 2", 
        price: 100, 
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfq3VR_IyYPjyPH8N3GzOQs8G4sznoLkDg-g8XNgm1uu9jaXfcG8z1nRsJkHbbSeSQlw&usqp=CAU' },
   
    { id: '3' ,
        categoria: 'libros', 
        name: "producto 3",   
        price: 401, 
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfq3VR_IyYPjyPH8N3GzOQs8G4sznoLkDg-g8XNgm1uu9jaXfcG8z1nRsJkHbbSeSQlw&usqp=CAU' },
    
     { id: '4' , 
        categoria: 'libros', 
        name: "producto 4", 
        price: 550, 
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfq3VR_IyYPjyPH8N3GzOQs8G4sznoLkDg-g8XNgm1uu9jaXfcG8z1nRsJkHbbSeSQlw&usqp=CAU' 
    } ,
   
     { id: '5' ,
        categoria: 'libros', 
        name: "producto 5", 
        price: 110, 
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfq3VR_IyYPjyPH8N3GzOQs8G4sznoLkDg-g8XNgm1uu9jaXfcG8z1nRsJkHbbSeSQlw&usqp=CAU' 
    } ,
    
     { id: '6' ,
        categoria: 'libros', 
        name: "producto 6",
        price: 190, 
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfq3VR_IyYPjyPH8N3GzOQs8G4sznoLkDg-g8XNgm1uu9jaXfcG8z1nRsJkHbbSeSQlw&usqp=CAU' 
    },
    
     { id: '7' ,
        categoria: 'libros',
        name: "producto 7", 
        price: 200, 
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfq3VR_IyYPjyPH8N3GzOQs8G4sznoLkDg-g8XNgm1uu9jaXfcG8z1nRsJkHbbSeSQlw&usqp=CAU'
     }  
  ] 


export const gFetch = (id) => {
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{
            // acciones
            resolve(id ? productos.find(prod => prod.id === id) : productos) // tardar 3 segundos 
        }, 1000)
    })
} 



// { id: string, name: string, description: string, stock: number }


