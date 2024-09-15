import { useState } from "react"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserDetail from "./components/UserDetail"
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"
import ProfileContext from "./context/ProfileContext"

function App() {
  const [profileDetails, setProfileDetails] = useState({
    email: "carlosbernardo@gmail.com", password: "carlosbernardo"
  })

  return (
    <>
      <ProfileContext.Provider value={{profileDetails, setProfileDetails}}>

        <Router>
          
          <Routes>
            {/* <Route path="/" element={<Home/>}/>
            <Route path="/user/:userId" element={<UserDetail/>}/> */}
                <Route path="/" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </Router>
      </ProfileContext.Provider>

    </>
  )
}

export default App
