import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Index } from './pages/Index'
import { Login } from './pages/auth/Login'
import { Signup } from './pages/auth/Signup'



export const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}