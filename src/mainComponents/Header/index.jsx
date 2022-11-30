import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png'



function Header() {

    return (
        <header className='sl_header'>
            <Link to="/">
                <img className='sl_header_img' src={Logo} alt =" logo adamaDev"/>
            </Link>
            <nav className='sl_header_nav'>
                <Link className='sl_header_link' to="/"> ACCUEIL </Link>
                <Link className='sl_header_link' to="/portfolio"> PORTFOLIO</Link>
                <Link className='sl_header_link' to="/cv"> CV</Link>
                <Link className='sl_header_link' to="/contact"> CONTACT</Link>
            </nav>                        
        </header>    
        )
}

export default Header