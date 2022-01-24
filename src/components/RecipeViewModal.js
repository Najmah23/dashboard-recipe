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
            <strong>Ingredients:</strong>{" "}
            <ul style={{ listStyle: "circle" }}>
              {recipe.ingredients
                .split("*")
                .slice(1)
                .map(ingredient => (
                  <li>{ingredient}</li>
                ))}
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Steps:</strong>  <ul style={{ listStyle: "auto" }}>
                      {recipe.steps?.split("*")
                        
                        .slice(1)
                        .map(step => (
                          <li>{step}</li>
                        ))}
                    </ul>
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
