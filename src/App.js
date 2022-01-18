import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Recipes  from "./pages/Recipe"
import RecipesContext from "./utils/RecipesContext"
import Login from "./pages/Login"
import Users from "./pages/Users" 

function App() {
  const [recipes, setRecips] = useState([])
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const getRecipes = async () => {
    const response = await axios.get("http://localhost:5000/api/recipes")
    setRecips(response.data)
  }

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboardRecipes,
      },
    })
    setUsers(response.data)
  }

  useEffect(() => {
    getRecipes()
    getUsers()
  }, [])
// ---------delet recipe
  const deleteRecipe = async recipeId => {
    try {
      await axios.delete(`http://localhost:5000/api/recipes/${recipeId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardRecipes,
        },
      })
      toast.success("recipe deleted")
      getRecipes()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
// -----------admen
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardRecipes = response.data
      toast.success("login success")
      navigate("/recipes")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  // ----------edit recipe-------
  const editRecipe = async (e, recipeId) => {
    e.preventDefault()
    try {
      const form = e.target
     
      const recipeBody = {
        title: form.elements.title.value,
        photo: form.elements.photo.value,
        ingredients: form.elements.ingredients.value,
        calories: form.elements.calories.value,
        types: form.elements.types.value,
      }
    
      await axios.put(`http://localhost:5000/api/recipes/${recipeId}`, recipeBody, {
        headers: {
          Authorization: localStorage.tokenDashboardRecipes,
        },
      })
      getRecipes()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
// --------add recipe-----
  const addRecipe = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const recipeBody = {
        title: form.elements.title.value,
        photo: form.elements.photo.value,
        ingredients: form.elements.ingredients.value,
        calories: form.elements.calories.value,
        types: form.elements.types.value,
      }
      await axios.post(`http://localhost:5000/api/recipes`, recipeBody, {
        headers: {
          Authorization: localStorage.tokenDashboardRecipes,
        },
      })

      getRecipes()
      toast.success("add recipe success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenDashboardRecipes")
  }
// -----------add admin--------
  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }

      await axios.post(`http://localhost:5000/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardRecipes,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
// -------delete user-------
  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardRecipes,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
 

  const store = {
    recipes,
    users,
    deleteRecipe,
    login,
    editRecipe,
    addRecipe,
    logout,
    addAdmin,
    deleteUser,
  }

  return (
    <RecipesContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route
              path="/recipes"
              element={localStorage.tokenDashboardRecipes ? <Recipes /> : <Navigate to="/login" />}
            />
            <Route path="/users" element={localStorage.tokenDashboardRecipes ? <Users /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </RecipesContext.Provider>
  )
}

export default App
