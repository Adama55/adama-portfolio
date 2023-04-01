import {React, useState} from "react"
import { Link } from 'react-router-dom'
import About from './contentHome/About/About'
import Services from './contentHome/Services/Services'
import Realisations from './contentHome/Realisations/Realisations'
import './Home.css'
import '../../styles/Theme.css'




function Home () {
  
  const [openAbout, setOpenAbout] = useState(true)
  const [openServices, setOpenServices] = useState(false)
  const [openRealisations, setOpenRealisations] = useState(false)
    
      return (
        <div className="sl-accueil font-Montserrat" >
          <div className="ls-navbar-accueil">
            <Link className="ls-navbar-accueil-link" onClick={() => {setOpenAbout(true); setOpenServices(false); setOpenRealisations(false)}}>
              About
            </Link>
            <Link className="ls-navbar-accueil-link" onClick={() => {setOpenServices(true); setOpenAbout(false); setOpenRealisations(false)}}>
              Services
            </Link>
            <Link className="ls-navbar-accueil-link" onClick={() => {setOpenRealisations(true); setOpenServices(false); setOpenAbout(false)}}>
              Realisations
            </Link>         
          </div>
          <div>
            
            <section id= "about" className={`ls-nav1 ${openAbout} color-white`}>
              {
                      openAbout && <div>  <About/></div>
              }
            </section>

            <section className={`ls-nav2 ${openServices} color-white`}>
                {
                  openServices && <div> <Services/> </div>
                }
            </section>
            <section className={`ls-nav3 ${openRealisations} color-white`}>
                {
                  openRealisations && <div> <Realisations/> </div>
                }
            </section>
          </div> 
      </div>
      )
}

export default Home