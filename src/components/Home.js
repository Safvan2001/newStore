import React from 'react'
import  {Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Home() {
  return (
    


   
    <div><div>
        <Link to={'/add'}>
          <Button variant="primary" size="sm">
            Add New Product
          </Button>
        </Link>
        </div>
    <div>



   <div>    
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Electronics</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
               <Link to={'/electr'}> <Button variant="primary">Go somewhere</Button></Link>
              </Card.Body>
            </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Clothes</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
               <Link to={'/clt'}> <Button variant="primary">Go somewhere</Button></Link>
              </Card.Body>
            </Card>
                </Col>
            </Row>
   <div></div>
        <Row>
            <Col></Col>
            <Col>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Furniture</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
<Link to={'/furt'}>
                <Button variant="primary">Go somewhere</Button>
    
</Link>          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Vegitables</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
<Link to={'/vgtb'}>
                <Button variant="primary">Go somewhere</Button>
    
</Link>          </Card.Body>
        </Card>
        </Col>
        </Row>
   </div>
</div>
</div>



    
  )
}

export default Home