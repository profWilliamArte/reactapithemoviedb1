
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Card from "../components/Card";

import { useEffect, useState } from "react";
const APIPelTendenciasCine  ='https://api.themoviedb.org/3/trending/movie/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE'; //tendencias cine
const APIEnTelevision       ='https://api.themoviedb.org/3/tv/on_the_air?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';  //en television
const APIPelProximamente    ='https://api.themoviedb.org/3/movie/upcoming?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';   //proximamente 
const APIPelRecientes       ='https://api.themoviedb.org/3/movie/now_playing?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE'; //en cartelera hoy
const APIPelMCTMDBEl        ='https://api.themoviedb.org/3/movie/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';  //mejor valoradas cine
const APIPelMCTMDBElTv      ='https://api.themoviedb.org/3/tv/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';  //mejor valoradas tv

const Tendencias = () => {
  const params = useParams()
  const [datos, setDatos] = useState([]);
  let API="";
  let titulo="";
  let tipo="";
  if(params.id=="tendenciascine") {
    API=APIPelTendenciasCine;
    titulo="Tendencias en el Cine";
    tipo="cine";
  }    
  if(params.id=="tendenciastv"){
    API=APIEnTelevision;
    titulo="Tendencias en TV";
    tipo="tv";
  }       
  if(params.id=="proximamente"){
    API=APIPelProximamente;
    titulo="Proximamente";
    tipo="cine";
  }       
  if(params.id=="recientes"){
    API=APIPelRecientes;
    titulo="Recientes";
    tipo="cine";
  }          
  if(params.id=="mejorValoradasCine"){
    API=APIPelMCTMDBEl;
    titulo="Mojor Valoradas en el Cine";
    tipo="cine";
  } 
  if(params.id=="mejorValoradasTv"){
    API=APIPelMCTMDBElTv;
    titulo="Mojor Valoradas en TV";
    tipo="tv";
  }   
  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
     // console.log(data);
      setDatos(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDatos();
  }, [params.id]);

  

  return (
    <div className="container text-white ">
      <h3 className="text-center py-3">{titulo}</h3>

      <div className="text-center py-4">
        <Link to="/tendencias/tendenciascine"     href="#" className="btn btn-success btn-sm me-2">Tendencias Cine</Link>
        <Link to="/tendencias/tendenciastv"       href="#" className="btn btn-primary btn-sm me-2">Tendencias Tv</Link>
        <Link to="/tendencias/proximamente"       href="#" className="btn btn-info btn-sm me-2">Próximamente</Link>
        <Link to="/tendencias/recientes"          href="#" className="btn btn-danger btn-sm me-2">Recientes</Link>
        <Link to="/tendencias/mejorValoradasCine" href="#" className="btn btn-light btn-sm me-2">Mejor Valoradas Cine</Link>
        <Link to="/tendencias/mejorValoradasTv"   href="#" className="btn btn-warning btn-sm me-2">Mejor Valoradas Tv</Link>
      </div>

      <div className="row">
        {datos && datos.map((pelicula) => (

          <Card key={pelicula.id} pelicula={pelicula} tipo={tipo}/>

        ))}
      </div>
    </div>
  );
};

export default Tendencias;