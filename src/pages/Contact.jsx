import Card from 'react-bootstrap/Card';

function Contact() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Adresse</Card.Title>
        <Card.Text>
        Technopôle de Sousse, Cité Hammam Maarou, Route ceinture de Sahloul Sousse, 4000
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Contact;