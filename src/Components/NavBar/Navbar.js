import React,{useState} from 'react'
import {FaMagento} from 'react-icons/fa'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {
    Nav, 
    NavContainer,  
    LogoHold,  
    MobileIcon,
    NavBar,
    NavLinks 
} 
    from './NavBar.Element'

function Navbar() {
    const [click, setClick] = useState(false);

    const handClick = () => {
        setClick(!click)
    }
  return (
    <>
    <Nav>
        <NavContainer>
            <LogoHold>
                <FaMagento />LSETF
            </LogoHold>

            <MobileIcon onClick={handClick}>
                {click ?<FaTimes />:<FaBars />}
            </MobileIcon>
            <NavBar onClick={handClick} click={click}>
                <Link to="/" style={{color:"white", textDecoration:"none"}}><NavLinks >Home</NavLinks></Link>
                <Link to="/contact" style={{color:"white", textDecoration:"none"}}><NavLinks>Contact</NavLinks></Link>
                <Link to="/serve" style={{color:"white", textDecoration:"none"}}><NavLinks>Services</NavLinks></Link>
                <Link to="/blog" style={{color:"white", textDecoration:"none"}}><NavLinks>Blog</NavLinks></Link>

            </NavBar>
           
        </NavContainer>
    </Nav>
    
    </>     
    
  )
}

export default Navbar