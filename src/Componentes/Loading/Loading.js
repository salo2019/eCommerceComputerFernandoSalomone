import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <Card className="text-center">
      <Card.Header>Cargando productos</Card.Header>
      <Card.Body>
        <Card.Text>
            <Spinner animation="border" variant="primary" />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Loading;