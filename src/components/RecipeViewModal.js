import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function RecipeViewModal(props) {
  const { show, setShow, recipe } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {recipe.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Types:</strong> {recipe.types}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Photo:</strong>
            <img src={recipe.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Steps:</strong> {recipe.steps}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Calories:</strong> {recipe.calories}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Rating:</strong> {recipe.ratingAverage}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RecipeViewModal
