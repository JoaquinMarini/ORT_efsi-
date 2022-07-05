import React from 'react';
import { Card, Button } from 'react-bootstrap';
import inscipcion from "../img/inscipcion.jpeg"

const card = () => {
    return ( 
        <Card>            
            <Card.Body>
                <Card.Title>Inscripción ciclo lectivo 2021 - Nivel Secundario</Card.Title>
                <Card.Img variant="top" src={inscipcion} />
                <Card.Text>
                Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>             
     );
}
 
export default card;