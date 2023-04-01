import React from "react"
import { useState} from "react"
import { Link } from 'react-router-dom'

import Competences from "./contentPortfolio/Competences/Competences"
import Experiences from "./contentPortfolio/Experiences/Experiences"
import Formations from "./contentPortfolio/Formations/Formations"

function Portfolio () {
    
  
  const [openFormations, setOpenFormations] = useState(true)
  const [openExperiences, setOpenExperiences] = useState(false)
  const [openCompetences, setOpenCompetences] = useState(false)
    
      return (
        <div className="sl-accueil font-Montserrat" >
          <div className="ls-navbar-accueil">
            <Link className="ls-navbar-accueil-link" onClick={() => {setOpenFormations(true); setOpenExperiences(false); setOpenCompetences(false)}}>
              Formations
            </Link>

            <Link className="ls-navbar-accueil-link" onClick={() => {setOpenExperiences(true); setOpenFormations(false); setOpenCompetences(false)}}>
              Expériences
            </Link>
            <Link className="ls-navbar-accueil-link" onClick={() => {setOpenCompetences(true); setOpenExperiences(false); setOpenFormations(false)}}>
              Compétences
            </Link>         
          </div>
          <div>
            
            <section id= "Formations" className={`ls-nav1 ${openFormations} color-white`}>
              {
                      openFormations && <div>  <Formations/></div>
              }
            </section>

            <section className={`ls-nav2 ${openExperiences} color-white`}>
                {
                  openExperiences && <div> <Experiences/> </div>
                }
            </section>
            <section className={`ls-nav3 ${openCompetences} color-white`}>
                {
                  openCompetences && <div> <Competences/> </div>
                }
            </section>
          </div> 
      </div>
      )
}

export default Portfolio