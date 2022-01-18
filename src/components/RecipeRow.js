import { useState } from "react"
import { Button } from "react-bootstrap"
import RecipeDeleteModal from "./RecipeDeleteModal"
import RecipeEditModal from "./RecipeEditModal"
import RecipeViewModal from "./RecipeViewModal"

function RecipeRow(props) {
  const { recipe } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{recipe._id}</td>
      <td>{recipe.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{recipe.types}</td>
      <td>
        <img src={recipe.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{recipe.calories}</td>

      <td>
        <Button variant="outline-success" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="outline-warning" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="outline-danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <RecipeViewModal show={viewShow} setShow={setViewShow} recipe={recipe} />
      <RecipeDeleteModal show={deleteShow} setShow={setDeleteShow} recipeId={recipe._id} />
      <RecipeEditModal show={editShow} setShow={setEditShow} recipe={recipe} />
    </tr>
  )
}

export default RecipeRow
