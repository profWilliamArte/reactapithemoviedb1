import Carousel from 'react-bootstrap/Carousel';

const Carrusel = () => {
  return (
    <Carousel>
        <Carousel.Item>
        <img src="banner1.png" alt="" />
        <Carousel.Caption>
            <h3>Godzilla y Kong: El nuevo imperio</h3>
            <p>"Una aventura cinematográfica completamente nueva, que enfrentará al todopoderoso Kong y al temible Godzilla contra una colosal."</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="banner2.png" alt="" />
        <Carousel.Caption>
            <h3>Kung Fu Panda 4</h3>
            <p>"Po se prepara para ser el líder espiritual del Valle de la Paz, buscando un sucesor como Guerrero Dragón.".</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="banner3.png" alt="" />
        <Carousel.Caption>
            <h3>Dune Parte dos</h3>
            <p>"Sigue el viaje mítico de Paul Atreides mientras se une a Chani y los Fremen en una guerra de venganza contra los conspiradores que destruyeron a su familia."
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Carrusel