import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Item = ({producto}) =>{
    return(
        <>
        <Row xs={1} md={1} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx} className="pb-4" >
                    <Card style={{ width: '16rem' }} key={producto.id}>
                        <Link to={`/producto/${producto.id}`}>
                            <Card.Img variant="top" src={producto.picture} /> 
                            </Link>
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>${producto.price}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
      </>
    )
}

export default Item;