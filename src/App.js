import 'antd/dist/antd.css';
import Navbar from './Components/NavBar/Navbar'
import GlobalStyle from './GlobalStyle';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Services from './Components/Services/Services'
import Blog from './Components/Blog/Blog'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App () {
  return(
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/serve' element={<Services/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
   
    </>
  )
}
export default App


