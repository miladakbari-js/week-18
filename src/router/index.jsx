import { Navigate, Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Contacts from "../pages/Contacts"

function AppRoutes() {
  return (
    <Routes>
        <Route index element={<Navigate to="/register"/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
    </Routes>
  )
}

export default AppRoutes