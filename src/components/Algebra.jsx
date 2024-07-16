import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import Libro1 from "../assets/algebra_elemental.jpg";
import Libro2 from "../assets/algebra_baldor.jpg";
import Libro3 from "../assets/algebra_lineal.jpg";


const Algebra =() => {
  return (
    <div className="containerlibro">
    <h2 className="title">Cátalogo: Libros de Álgebra</h2>
    <CardGroup >    
    <Card >
      <Card.Body style= {{weight:'150px'}}>
        <img src={Libro1}></img>
        <Card.Title>Álgebra elemental</Card.Title>
        <Card.Text>
          Para aquellos que incursionan en el mundo de las matemáticas y álgebra.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Agotado</small>
      </Card.Footer>
    </Card>
    <Card > 
      <Card.Body style= {{weight:'150px'}}>
        <img src={Libro2}></img>
        <Card.Title>Algebra baldor</Card.Title>
        <Card.Text>
          Aprende álgebra con nuestro amigo Baldor.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">2 libros disponibles</small>
      </Card.Footer>
      </Card>
    <Card>
      <Card.Body>
        <img src={Libro3}></img>
        <Card.Title>Álgebra Lineal </Card.Title>
        <Card.Text>
          Libro de ejercicicios de algebra vectorial con soluciones.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">5 libros disponibles</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  </div>
  );
};

export default Algebra;
