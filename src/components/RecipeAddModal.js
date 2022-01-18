import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import RecipesContext from "../utils/RecipesContext"

function RecipeAddModal(props) {
  const { show, setShow } = props
  const { addRecipe } = useContext(RecipesContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addRecipe}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Ingredients
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="ingredients" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Steps
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="steps" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Calories
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="calories" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Types
            </Form.Label>
            <Col md="8">
              <Form.Select name="types">
                <option>Open this select type </option>
                <option value="Breakfast">breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snack">Snack</option>
                <option value="Dinner">Dinner</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="outline-primary" type="submit" onClick={() => setShow(false)}>
            Add Recipe
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default RecipeAddModal
