import { Link } from "react-router-dom";

const ruta = "https://image.tmdb.org/t/p/w500";
const rutaDetalle="/detalle/"
const Card = ({pelicula,tipo}) => {

  return (
    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4" key={pelicula.id}>
        <div className="card h-100">
        <div className="card-header p-0">
            <img src={ruta + pelicula.poster_path} className="img-fluid" alt="..." />
        </div>
        <div className="card-body text-center">
            <p>{pelicula.title || pelicula.name}</p>
            <p>Popularidad <span className="badge rounded-pill p-1 bg-danger "> {parseInt(pelicula.popularity)}</span></p>
        </div>
        <div className="card-footer text-center">
            <Link to={rutaDetalle + tipo + '/' + pelicula.id} className="btn btn-success btn-sm mx-1" >Detalle</Link>
        </div>
        </div>
    </div>
  )
}

export default Card