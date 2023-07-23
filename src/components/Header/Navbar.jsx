import { BsHouseDoorFill } from 'react-icons/bs'
import {BsFillCartFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { useCustomContext } from '../../context/ContextProvider'

function Navbar() {
  const {cart} = useCustomContext()

    return (
      <>
       <nav className="menu">
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/"> <BsHouseDoorFill /></NavLink>
                    <NavLink to="/cart"> <BsFillCartFill /> <p>{cart.length}</p> </NavLink>
                    
                </nav>
      </>
    )
  }
  
  export default Navbar
  