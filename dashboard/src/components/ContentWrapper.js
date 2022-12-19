import React, { useEffect, useState } from "react";

function ContentWrapper (){

    const [dataApi, setDataApi] = useState([])
    
    const obtenerDatos = async () => {
         const data = await fetch('http://localhost:3001/api/products')
         const producto = await data.json()
         console.log(producto)
         setDataApi(producto.products)
        
 }
    useEffect(() => {
        obtenerDatos()
    }, [])      
       

        return (
            <>
               <ul>
                { 
                   dataApi.map(item => (
                     <div> 
                        <li>{item.name}</li>
                        <div>
                            <img src={item.image} alt={item.id}/>
                            
                        </div>
                    </div> 
                    
                    ))
                    }
              </ul> 
            </>
        )
}


export default ContentWrapper;