import { Link } from "react-router-dom";
import FiltroGenerosTv from "./FiltroGenerosTv";
import FiltroGenerosCine from "./FiltroGenerosCine";
import logo from '../assets/logo.svg';



const Header = () => {
   

    const buscar=(e)=>{
        e.preventDefault()
        
        alert("buscando")
    }

  return (
        <nav className="navbar navbar-expand-lg bg-black p-2" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} alt="" width={200}  /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/inicio" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tendencias/recientes" className="nav-link active" aria-current="page" href="#">Tendencias</Link>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Generos Tv
                    </a>
                    <ul className="dropdown-menu">
                       <FiltroGenerosTv/>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Generos Cine
                    </a>
                    <ul className="dropdown-menu">
                        <FiltroGenerosCine/>
                    </ul>
                </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={buscar}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>

  )
}

export default Header