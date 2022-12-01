import {React, useState} from "react"
import { useParams, Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './contentHome/About'
import Services from './contentHome/Services'
import Realisations from './contentHome/Realisations'
import HomeLayout from "./HomeLayout"

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
              Realisation
            </Link>         
          </div>
          <div>
            
            <section id= "about" className={`ls-about ${openAbout} color-white`}>
              {
                      openAbout && <div>  <About/></div>
              }
            </section>

            <section className={`ls-services ${openServices} color-white`}>
                {
                  openServices && <div> <Services/> </div>
                }
            </section>
            <section className={`ls-realisations ${openRealisations} color-white`}>
              mes realisations sont ici
            </section>
          </div> 
      </div>
      )
}

export default Home