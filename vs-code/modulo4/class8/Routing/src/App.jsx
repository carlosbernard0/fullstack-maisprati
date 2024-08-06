import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Counter from './components/Timer'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  
  return (
  
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' Component={Counter}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
