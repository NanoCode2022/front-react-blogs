import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { BlogPage } from './components/BlogPage'
import {Navbar} from './components/Navbar'
import { Footer } from './components/Footer'
import { Login } from './components/Login'
import { CreateBlog } from './components/CreateBlog'

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white-100">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>} />
          <Route path='/blog/:id' element={<BlogPage/>}/>
          <Route path='/signin' element={<Login/>} />
          <Route path='/create' element={<CreateBlog/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
  )
}

export default App
