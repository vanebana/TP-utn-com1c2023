import Logo from "./Logo" 
import Search from "./Search"
import Navbar from "./Navbar"
import Products from "../products"

function Header() {

    return (
      <>
        
        <header>
            <nav>
            <Logo />
            </nav>
        <Search />
        <Navbar />
        
        </header>
       
         
        
      
      </>
    )
  }
  
  export default Header
  