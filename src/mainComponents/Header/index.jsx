import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import PhotoHead from '../../assets/maPhoto.png'
import './Header.css'
import '../../styles/Theme.css'



function Header() {

    return (
        <header className='sl_header'>
            <div className='ls-navbar'>
                <Link to="/">
                    <img className='sl_header_img' src={Logo} alt ="logo adamaDev"/>
                </Link>
                <nav className='sl_header_nav'>
                    <Link className='sl_header_link color-white font-Montserrat' to="/"> ACCUEIL </Link>
                    <Link className='sl_header_link color-white font-Montserrat' to="/portfolio"> PORTFOLIO</Link>
                    <Link className='sl_header_link color-white font-Montserrat' to="/cv"> CV</Link>
                    <Link className='sl_header_link color-white font-Montserrat' to="/contact"> CONTACT</Link>
                </nav>
                <nav className='' id="sl-nav-fix">
                    <Link className='sl_header_link color-white font-Montserrat' to="/"> ACCUEIL </Link>
                    <Link className='sl_header_link color-white font-Montserrat' to="/portfolio"> PORTFOLIO</Link>
                    <Link className='sl_header_link color-white font-Montserrat' to="/cv"> CV</Link>
                    <Link className='sl_header_link color-white font-Montserrat' to="/contact"> CONTACT</Link>
                </nav>                    
            </div>
            <div className='sl-ceinture'>
                <div className='ls-maPhoto-head'>
                    <img className='ls-photo-head' src={PhotoHead} alt ="photoAdama"/>
                </div>
                <div className='ls-line'>
                </div>
            </div>
            <div className='ls-cadre-blanc'>
            </div>                               
        </header>    
        )
}

export default Header