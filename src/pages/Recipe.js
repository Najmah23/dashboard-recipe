import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import RecipesContext from "../utils/RecipesContext"
import AddIcon from "@mui/icons-material/Add"
import RecipeAddModal from "../components/RecipeAddModal"
import RecipeRow from "../components/RecipeRow"

function Recipes() {
  const { recipes } = useContext(RecipesContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Recipes</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
          Add Recipe
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "24%" }}>id</th>
            <th style={{ width: "15%" }}>Title</th>
            <th style={{ width: "12%" }}>Type</th>
            <th style={{ width: "18%" }}>Photo</th>
            <th style={{ width: "11%" }}>Calories</th>
            <th style={{ width: "30%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => (
            <RecipeRow key={recipe._id} recipe={recipe} />
          ))}
        </tbody>
      </Table>
      <RecipeAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Recipes
