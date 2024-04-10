
import Carrusel from "../components/Carrusel"
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const APIPelTendenciasCine  ='https://api.themoviedb.org/3/trending/movie/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE'; //tendencias cine
const Inicio = () => {
  const [datos, setDatos] = useState([]);
  const getDatos = async () => {
    try {
      const response = await fetch(APIPelTendenciasCine);
      const data = await response.json();
      //console.log(data);
      setDatos(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDatos();
  }, []);
  let tipo="cine";
  const ruta = "https://image.tmdb.org/t/p/w500";
  const rutaDetalle="/detalle/"
  return (
    <>
        <Carrusel/>
        <h3 className="text-center py-5 text-white">Tendemcia en el Cine</h3>
        <div className="container">
          <div className="row">
          {datos && datos.map((pelicula) => (

            <div className="col-6 col-md-4 col-lg-3  mb-4" key={pelicula.id}>
            <div className="card h-100" data-bs-theme="dark">
            <div className="card-header p-0">
                <img src={ruta + pelicula.backdrop_path} className="img-fluid" alt="..." />
            </div>
            <div className="card-body text-center">
                <p>{pelicula.title || pelicula.name}</p>
            </div>
            <div className="card-footer text-center">
                <Link to={rutaDetalle + tipo + '/' + pelicula.id} className="btn btn-success btn-sm mx-1" >Detalle</Link>
            </div>
            </div>
            </div>

          ))}
        </div>
      </div>
    </>

  )
}

export default Inicio