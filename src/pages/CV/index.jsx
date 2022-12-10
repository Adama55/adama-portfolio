import {React, useState} from "react"
import { Link } from 'react-router-dom'
import EngSocial from './contentCV/EngSocial'
import MonCV from "./contentCV/MonCV"
import './CV.css'
import '../../styles/Theme.css'




function CV () {
  
  const [openMonCV, setOpenMonCV] = useState(true)
  const [openEngSocial, setOpenEngSocial] = useState(false)
    
      return (
        <div className="sl-accueil font-Montserrat" >
          <div className="ls-navbar-accueil">
            <Link className="ls-navbar-accueil-link" onClick={() => {setOpenMonCV(true); setOpenEngSocial(false)}}>
             Curriculum vitæ
            </Link>
            <Link className="ls-navbar-accueil-link" onClick={() => {setOpenEngSocial(true); setOpenMonCV(false)}}>
              Engagement Social 
            </Link>        
          </div>
          <div>
            
            <section id= "MonCV" className={`ls-nav1 ${openMonCV} color-white`}>
              {
                      openMonCV && <div>  <MonCV/></div>
              }
            </section>

            <section className={`ls-nav2 ${openEngSocial} color-white`}>
                {
                  openEngSocial && <div> <EngSocial/> </div>
                }
            </section>
          </div> 
      </div>
      )
}

export default CV