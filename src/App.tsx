import "./css/App.css"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
