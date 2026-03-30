import { useEffect, useState } from "react";


function Pagina() {

    const [data, setData] = useState([])

useEffect (()=>{

    const obtenerDatos = async () => {
        try {
            const respuesta = await fetch("https://devsapihub.com/api-movies")
            const datos = await respuesta.json()

            setData(datos)
            console.log(datos)
        } catch (error) {
            
        }
    }
    obtenerDatos()

},[])
    return (
        <>
        <section className="peliculas">
        <div className="contenedor-card">
        {data.map((pelicula)=>(
            <div key={pelicula.id} className="card">
                <div className="years">
                    <h3>{pelicula.year}</h3>
                    
                </div>
                <img src={pelicula.image_url}></img>
                <div className="contenido">
                <h1>{pelicula.title}</h1>
                <p>{pelicula.description}</p>
                <h4>{pelicula.genre}</h4>
                </div>
            </div>
        ))}
        </div>
       </section>
        </>
    )
    
}
export default Pagina;