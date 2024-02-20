import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SinglePost from "./pages/SinglePage"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
export default App