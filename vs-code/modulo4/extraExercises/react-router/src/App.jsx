import { useState } from "react"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserDetail from "./components/UserDetail"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={UserDetail}/>
          <Route/>
          <Route/>
        </Routes>
      </Router>
    </>
  )
}

export default App
