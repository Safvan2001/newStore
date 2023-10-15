import React from 'react'
import  {Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Electronics() {
  return (
    <div>   <div>



    <div>    
             <Row>
                 <Col>
                 <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="holder.js/100px180" />
               <Card.Body>
                 <Card.Title>Mobile Phones</Card.Title>
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
                 <Card.Title>Laptops</Card.Title>
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
             <Col>
             <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card></Col>
             <Col>
             <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>Speaker</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
             </Card.Text>
 
                 <Button variant="primary">Go somewhere</Button>
     
          </Card.Body>
         </Card>
         <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>Air Conditioner</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
             </Card.Text>
 
                 <Button variant="primary">Go somewhere</Button>
     
           </Card.Body>
         </Card>
         </Col>
         </Row>
    </div>
 </div>
 </div>
 
 
 
     
  )
}

export default Electronics