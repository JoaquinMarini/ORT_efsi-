import React from 'react';
import { Card } from 'react-bootstrap';
import inscipcion from "../img/inscipcion.jpeg"

const card = () => {
    return ( 
        <Card className="Card">         
            <Card.Body>
                <Card.Title className='Card-Header'>Inscripción ciclo lectivo 2021 - Nivel Secundario</Card.Title>
                <div className='border-top mt-3 mb-3'></div>
                <Card.Img variant="top" className='Card-Image' src={inscipcion} />
                <Card.Text>
                <br></br>
                Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el ciclo 2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
                </Card.Text>
            </Card.Body>
        </Card>             
     );
}
 
export default card;