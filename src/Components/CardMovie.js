import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";

function CardMovie({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.decription}</Card.Text>
        <Button variant="primary">
          <ReactStars edit={false} count={5} size={24} activeColor="#ffd700"  value={movie.rate}/>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardMovie;
