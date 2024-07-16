import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import Libro1 from "../assets/psico1.jpg";
import Libro2 from "../assets/psico2.jpg";
import Libro3 from "../assets/psico3.jpg";
import Libro4 from "../assets/psico4.jpg";


const Psicologia =() => {
  return (
    <div className="containerlibro">
    <h2 className="title">Cátalogo: Libros de Psicología</h2>
    <CardGroup style= {{padding: '20px'}}>    
    <Card >
      <Card.Body style= {{weight:'150px'}}>
        <img src={Libro1}></img>
        <Card.Title>Introducción a la psicología</Card.Title>
        <Card.Text>
          Todo lo básico que necesitas saber acerca de la ciencia de la mente, para los principiantes.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">2 libros disponibles</small>
      </Card.Footer>
    </Card>
    <Card > 
      <Card.Body style= {{weight:'150px'}}>
        <img src={Libro2}></img>
        <Card.Title>Un golpe mortal a la ansiedad</Card.Title>
        <Card.Text>
          Conoce cuales son los métodos para disminuir la ansiedad. Así mismo conoce que es lo que la provoca.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">1 libro disponible</small>
      </Card.Footer>
      </Card>
    <Card>
      <Card.Body>
        <img src={Libro3}></img>
        <Card.Title>Psicología positiva</Card.Title>
        <Card.Text>
          Descubre como ver el lado bueno de las cosas en momentos adversos y como lidear con dichos momentos.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">1 libros disponibles</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Body>
        <img src={Libro4}></img>
        <Card.Title>Los hábitos de un cerebro feliz</Card.Title>
        <Card.Text>
        Porque todo en esta vida tiene un lado bueno. 
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">1 libro disponible</small>
      </Card.Footer>
    </Card>
  
  </CardGroup>
  </div>
  );
};

export default Psicologia;
