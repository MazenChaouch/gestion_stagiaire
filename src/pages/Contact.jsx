import Card from 'react-bootstrap/Card';
import React from "react";
import Footer from '../componant/Footer';
import Header from '../componant/Header';

const Contact = () => {

    return ( <>
  
   <Header/>
    <div className="bg-image" >
      <div className='d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        <div className='col-sm-4'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.fox-detectives.com/wp-content/uploads/2020/02/locali.jpg" />
      <Card.Body>
        <Card.Title>Adresse</Card.Title>
        <Card.Text>
          Technopôle de Sousse, Cité Hammam Maarou, Route ceinture de Sahloul Sousse, 4000
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='col-sm-4'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://media.istockphoto.com/vectors/red-call-icon-vector-id971654072?k=20&m=971654072&s=170667a&w=0&h=p2SH3vlIJCbFaEE7PfpzG6MgtChfj_G9YfW5tZmQhNA=" />
        <Card.Body>
          <Card.Title>Téléphone</Card.Title>
          <Card.Text>
          21267722
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='col-sm-4'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" />
        <Card.Body>
          <Card.Title>Email</Card.Title>
          <Card.Text>
          contact@envast.tn
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </div>
      </div>
      </div>
      <Footer/>
      </>
  );
}

export default Contact;