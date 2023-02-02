import {
    Card
}from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Apartment = (props) => {

    const {
        id,
        title,
        city,
        address,
        rooms,
        price,
        description,
        image
    } = props;
    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description} {address}
                    </Card.Text>
                    <Link to={`/apartment/${id}`} className="btn btn-primary">
                        Подробнее
                    </Link> 
                </Card.Body>
            </Card>
            </>
            )
}