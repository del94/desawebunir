import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import Libro1 from "../assets/bio1.jpg";
import Libro2 from "../assets/bio2.jpg";
import Libro3 from "../assets/bio3.jpg";
import Libro4 from "../assets/bio4.jpg";


const Biologia =() => {
  return (
    <div className="containerlibro">
    <h2 className="title">Cátalogo: Libros de Biología</h2>
    <CardGroup style= {{padding: '20px'}}>    
    <Card >
      <Card.Body style= {{weight:'150px'}}>
        <img src={Libro1}></img>
        <Card.Title>Biología: animales de la selva</Card.Title>
        <Card.Text>
          Como los animales que habitan en la selva.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">6 libros disponibles</small>
      </Card.Footer>
    </Card>
    <Card > 
      <Card.Body style= {{weight:'150px'}}>
        <img src={Libro2}></img>
        <Card.Title>Biología: Aves</Card.Title>
        <Card.Text>
          Conoce que tipo de aves habitan en cada habitad, así como su ciclo de vida y migraciones.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">7 libros disponibles</small>
      </Card.Footer>
      </Card>
    <Card>
      <Card.Body>
        <img src={Libro3}></img>
        <Card.Title>Biología celular</Card.Title>
        <Card.Text>
          Conoce los tipos de reproducción celular y sus partes.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">1 libros disponibles</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Body>
        <img src={Libro4}></img>
        <Card.Title>Biología marina</Card.Title>
        <Card.Text>
          Conoce como es el habitad de los animales acuáticos. 
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

export default Biologia;
