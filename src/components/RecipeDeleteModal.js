import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import RecipesContext from "../utils/RecipesContext"

function RecipeDeleteModal(props) {
  const { deleteRecipe } = useContext(RecipesContext)
  const { show, setShow, recipeId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this recipe ?</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="outline-danger" onClick={() => deleteRecipe(recipeId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RecipeDeleteModal
