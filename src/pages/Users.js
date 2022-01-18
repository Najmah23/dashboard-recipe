import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import RecipesContext from "../utils/RecipesContext"
import AddIcon from "@mui/icons-material/Add"
import UserRow from "../components/UserRow"
import AdminAddModal from "../components/AdminAddModal"

function Users() {
  const { users } = useContext(RecipesContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Users</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon /> Add Admin
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "18%" }}>id</th>
            <th style={{ width: "18%" }}>Full Name</th>
            <th style={{ width: "18%" }}>Email</th>
            <th style={{ width: "18%" }}>Avatar</th>
            <th style={{ width: "9%" }}>Role</th>
            <th style={{ width: "25%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
      <AdminAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Users
