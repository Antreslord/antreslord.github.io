import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage  from './pages/HomePage'
import HelenaPage from './pages/HelenaPage'
import AlienPage from './pages/AlienPage'
import Footer from './components/Footer'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/helena' Component={HelenaPage}/>
        <Route path='/alien-attack' Component={AlienPage}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
