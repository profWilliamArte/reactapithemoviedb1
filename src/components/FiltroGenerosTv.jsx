
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const APIPelPopularesTv   ='https://api.themoviedb.org/3/genre/tv/list?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';
const ruta="/categorias/";
const tipo="/tv";
const FiltroGenerosTv = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () =>{
        try {
          const response = await fetch(APIPelPopularesTv);
          const data = await response.json();
          //console.log(data)
          setDatos(data.genres);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[]);
  return (
    <>
       {datos && datos.map((gen) => (
            <li key={gen.id}><Link to={ruta + gen.id + tipo} className="dropdown-item" href="#">{gen.name}</Link></li>
        ))}
    
    </>
  )
}

export default FiltroGenerosTv