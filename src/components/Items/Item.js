import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

const Item = ({producto, onAdd}) =>{
    return(
        <>
        <Row xs={1} md={1} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx} className="pb-4" >
                    <Card style={{ width: '16rem' }} key={producto.id}>
                        <Card.Img variant="top" src={producto.picture} /> 
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>${producto.price}</Card.Text>
                            <ItemCount stock="5" onAdd={onAdd}/>
                        </Card.Body>
                        <Button variant="card">Agregar al carrito</Button>
                    </Card>
                </Col>
            ))}
        </Row>
      </>
    )
}

export default Item;