import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import Libro1 from "../assets/hist_mex2.jpg";
import Libro2 from "../assets/hist_mex3.jpg";
import Libro3 from "../assets/hist_mex4.jpg";
import Libro4 from "../assets/hist_mex1.jpg";


const Historia =() => {
  return (
    <div className="containerlibro">
    <h2 className="title">Cátalogo: Libros de Historia</h2>
    <CardGroup style= {{padding: '20px'}}>    
    <Card >
      <Card.Body style= {{weight:'150px'}}>
        <img src={Libro1}></img>
        <Card.Title>Historia Prehispánica</Card.Title>
        <Card.Text>
          Conoce cuando y como se desarrollaron las culturas prehispánicas, así como su principales centros ceremoniales.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">2 libros disponibles</small>
      </Card.Footer>
    </Card>
    <Card > 
      <Card.Body style= {{weight:'150px'}}>
        <img src={Libro2}></img>
        <Card.Title>Historia de México independiente</Card.Title>
        <Card.Text>
          Conoce como fueron los primeros años de un méxico independiente.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">7 libros disponibles</small>
      </Card.Footer>
      </Card>
    <Card>
      <Card.Body>
        <img src={Libro3}></img>
        <Card.Title>Historia de México revolucionario</Card.Title>
        <Card.Text>
          Conoce las causas y consecuencias de la revolución mexicana.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">5 libros disponibles</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Body>
        <img src={Libro4}></img>
        <Card.Title>Historia de México contemporáneo</Card.Title>
        <Card.Text>
          Conoce como se forjó un mexico institucionalista, dejando atrás los levantamientos armados.
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

export default Historia;
