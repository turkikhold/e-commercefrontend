import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes, Route }from 'react-router-dom';
import Listcategories from './component/categories/Listcategories';
import Insertcategorie from './component/categories/Insertcategorie';
import Menu from './component/Menu';
import Listearticles from './component/article/Listearticles';
import Insertarticle from './component/article/Insertarticle';
import Editarticle from './component/article/Editarticle';
import Viewarticle from './component/article/VIewarticle';
import Editcatgeorie from './component/categories/Editcatgeorie';
import Viewcategorie from './component/categories/VIewcategorie';
import Listscategorie from './component/scategories/Listscategorie';
import Insertscategorie from './component/scategories/Insertscategorie';
import Editscategorie from './component/scategories/Editscategorie';
import Viewscategorie from './component/scategories/Viewscategorie';
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
     <Router>
      <Menu/>
      <Routes>
      <Route path="/articles" element={<Listearticles/>}/>
      <Route path="/articles/add" element={<Insertarticle/>}/>
      <Route path="/article/edit/:id" element={<Editarticle/>}/>
      <Route path="/article/view/:id" element={<Viewarticle/>}/>

      <Route path="/categories" element={<Listcategories/>}/>
      <Route path="/categories/add" element={<Insertcategorie/>}/>
      <Route path="/categories/edit/:id" element={<Editcatgeorie/>}/>
      <Route path="/categories/view/:id" element={<Viewcategorie/>}/>

      <Route path="/scategories" element={<Listscategorie/>}/>
      <Route path="/scategories/add" element={<Insertscategorie/>}/>
      <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
      <Route path="/scategories/view/:id" element={<Viewscategorie/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
