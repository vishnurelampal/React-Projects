import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Body from './assets/Components/Body'
import Profile from './assets/Components/Profile'
import Login from './assets/Components/Login'
import Feed from './assets/Components/Feed'


function App() {
  

  return (
    <div className=''>
     
      <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body/>}>
        <Route path='/' element={<Login/>  } />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/feed' element={<Feed/>} />
        </Route>
      </Routes>
      </BrowserRouter >
 

    </div>
  )
}

export default App
