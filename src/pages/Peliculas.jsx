
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";


//const API = `https://api.themoviedb.org/3/person/${actorId}/credits?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES&sort_by=popularity.desc`;




const Peliculas = () => {
    const [datos, setDatos] = useState({});
    const params = useParams()
    let id=params.id;

    const APIPeliculas       =`https://api.themoviedb.org/3/person/${id}/credits?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES&sort_by=popularity.desc`;
    const getDatos = async () => {  
        try {
            const response = await fetch(APIPeliculas);
            const data = await response.json();
            //console.log(data)
            setDatos(data.cast); 
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {

        getDatos();
    },[]);


  return (
    <>
     <div className="container text-white ">
      <h3 className="text-center py-3">Peliculas </h3>
      <div className="row">
     {Array.isArray(datos) && datos.map((pelicula,index) => (

            <Card key={pelicula.id} pelicula={pelicula} tipo='cine'/>
     
      ))}
   </div>
    
    </div>
    </>
   
  )
}

export default Peliculas