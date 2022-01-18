import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import RecipesContext from "../utils/RecipesContext"

function AdminAddModal(props) {
  const { show, setShow } = props
  const { addAdmin } = useContext(RecipesContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addAdmin}>
        <Modal.Header closeButton>
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="outline-primary" type="submit" onClick={() => setShow(false)}>
            Add Admin
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AdminAddModal
