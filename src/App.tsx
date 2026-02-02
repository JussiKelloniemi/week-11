import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FrontPage from './components/FrontPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage />}/>
        </Routes>
      </BrowserRouter>
      <div>
      </div>
    </div>
  )
}

export default App
