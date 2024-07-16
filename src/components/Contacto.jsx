import React from "react";
import Map from "./Maps";
import credential from "./credential";

const mapURL= `https://maps.googleapis.com/api/js?v=3.exp&key=${credential.mapsKey}`;


const Contacto =() => {
  return <div>   
    <h1>¡Hola! Estas en contacto</h1>
    <div>
        <Map
        googleMapURL = {mapURL}
        containerElement = {<div style={{height:'400px'}}/>}
        mapElement =  {<div style={{height:'100%'}}/>}
        loadingElement = {<p>Cargando</p>}
        />
    </div>
    </div>;
};

export default Contacto;
