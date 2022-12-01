import React from 'react'
import {Link} from 'react-router-dom'


function Sheader() {

    return (
        <div className='sl_header'>
            <nav className='sl_sousHeadr_nav'>
                   <Link className='' to="/"> About </Link>                    
                   <Link className='' to="/services"> Services </Link>
                   <Link className='' to="/realisations"> Realisations </Link>
            </nav>                              
        </div>    
        )
}

export default Sheader