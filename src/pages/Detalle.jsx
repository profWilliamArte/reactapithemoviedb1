import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
const Detalle = () => {

    const [datos, setDatos] = useState({});
    const [datareparto, setDatareparto] = useState({});
    const [dataproduccion, setdProduccion] = useState({});
    const [datavideo, setDatavideo]= useState({})
    const [playtrailer, setPlaytrailer] = useState(false)

    const params = useParams()
    let tipo=params.tipo;
    let id=params.id;
    let API="";

    if(tipo=="cine") {
        API=`https://api.themoviedb.org/3/movie/${id}?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES`;
    }else{
        API=`https://api.themoviedb.org/3/tv/${id}?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES`;
    }  

    const getDatos = async () => {  
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data);
            setDatos(data); // Actualizar el estado con los datos obtenidos
        } catch (error) {
            console.error(error);
        }
    };
    const APIVideos         =`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ecbcdcf9044928d12b179d9153f5a269&language=en-US` 
    const getVideo = async () => {  
        try {
            const response = await fetch(APIVideos);
            const data = await response.json();
            //console.log(data);
            setDatavideo(data.results); // Actualizar el estado con los datos obtenidos
           
        } catch (error) {
            console.error(error);
        }
    };

    let trailerkey;
    {Array.isArray(datavideo) &&  datavideo[0].key!=="" ? trailerkey = datavideo[0].key  : null}

   

    

    const APICredits       =`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-ES&sort_by=popularity.desc`;
    const getReparto = async () => {  
        try {
            const response = await fetch(APICredits);
            const data = await response.json();
            //console.log(data)
            setDatareparto(data.cast); 
            setdProduccion(data.crew); 
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getDatos();
        getReparto();
        getVideo();
    },[]);




    const ruta = "https://image.tmdb.org/t/p/original/";  
    const rutaPel ="/peliculas/";
    //formatear fecha
    const fecha = new Date(datos.release_date); // Reemplaza 'datos.release_date' con la variable que contiene la fecha
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript son indexados desde 0, por lo que se suma 1 al mes
    const año = fecha.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${año}`;
  

    const renderTrailer=()=>{
       
        
        return(
            <YouTube videoId={trailerkey}
                className={"youtube-container"}
                opts={{
                    width:"100%",
                    height:"100%"
                }}
            /> 
        )
        
    }
    
  return (
    <>
       
        <div className="banner" style={{backgroundImage:"url(" + ruta + datos.backdrop_path + ")"}}>
           
            {playtrailer && trailerkey && trailerkey !== "" ?  renderTrailer()  : null} 

            <div className="sombra">
                <h1 className="pt-5 display-1 banner_titulo">{datos.title || datos.name}</h1>
                <h5 className="pt-5 display-4 banner_titulo">{datos.tagline}</h5>
                
                {datos.genres && datos.genres.length > 0 && (
                    <h5 className="display-5 banner_titulo">Genero: {datos.genres[0].name}</h5>
                )}
             
                <h5 className="display-5">Titulo Original: {datos.original_title} </h5>
                <h5 className="display-5">Lenguaje Original: {datos.original_language} </h5>
                {datos.production_countries && (
                    <h5 className="display-5">Producida en: {datos.production_countries[0].name} </h5>
                )}
                {datos.vote_average && datos.vote_average > 0 && (
                    <h2 className="my-4">Average: <span className=" badge lg-ba bg-warning p-2">{datos.vote_average.toFixed(1)}%</span></h2> 
                )}

                <p className="banner_descripcion">{datos.overview}</p>

                <div className="my-3">
                    { trailerkey && (
                        <button className="btn btn-danger me-2 "  onClick={()=>setPlaytrailer(true)}>Play</button>
                    )
                    }
                    <Link to="/inicio" href="#"  className="btn btn-success ">Regresar</Link>
                </div> 
                {datos.release_date && (
                    <h5 className="py-3">Fecha de Lanzamiento: {fechaFormateada} </h5>
                )}
            </div> 
        </div>

   

        <section className="container bg-dark py-5">
            <h3 className="text-center text-white py-4">Reparto</h3>
            <div className="row row-cols-lg-6 m-2">
                {Array.isArray(datareparto) && datareparto.map((item,index) => (
                    item.profile_path && item.profile_path !== "" ? (
                        <div className="col-6 col-sm-6 col-md-4 col-ls-3 col-xl-2 mb-4" key={index}>
                          <div className="card resaltar text-center h-100">

                            <img src={ruta + item.profile_path} className="card-img-top " alt="..."/>
                            <p className="small">
                              {item.name}
                              <br />
                              <span className="small text-black">{item.character}</span> <br />
                              <span className="small text-dark"><b>Popularidad: {item.popularity}</b></span>
                            </p>
                            <div className="card-footer">
                                <Link to={rutaPel + item.id} href="#" className="btn btn-danger d-grid btn-sm">Peliculas</Link>
                            </div>
                          </div>
                        </div>
                    ) : null
                ))}
            </div>
        </section>

        <section className="bg-black py-5 ">
            <div className="container">
                <h3 className="text-center text-white py-4">Producción</h3>
                <div className="row row-cols-lg-6 m-2">
                    {Array.isArray(dataproduccion) && dataproduccion.map((item, index) => (
                        item.profile_path && item.profile_path !== "" ? (
                            <div className="col-xs-6 col-sm-6 col-md-2 mb-4" key={index}>
                            <div className="card resaltar text-center h-100 p-4">
                                <p className="lead">
                                {item.job}<br />
                                <b> {item.name}</b><br />
                                <b>{item.character}</b>
                                </p>
                            </div>
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </section>
                                         
       
    </>
  )
}

export default Detalle


