import ProtectedRoutes from "./components/ProtectedRoutes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"

function App() {
  
  return(
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route 
            path="/home"
            element={
              <ProtectedRoutes isLoggedIn={false}>
                  <Home/>
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>

    </>
  )
}

export default App
