import React from "react"
import './Competences.css'
import Niveau from "./Niveau/Niveau"



function Competences() {

    return (
        <div>
            <div className="sl-petit-barre">
            </div>
            <h2  > Compétences techniques</h2>
            <ul className="sl-competences">
            <Niveau cPlaint={5}/>
            <li> HTML & CSS & Sass  </li> 
            <Niveau cPlaint={4}/>
            <li>Javascript & React js</li>
            <Niveau cPlaint={3}/>
            <li>Express & MongoDB</li>
            <Niveau cPlaint={4}/>
            <li>Figma & Canvas</li>
            <Niveau cPlaint={4}/>
            <li> Github </li>
            <Niveau cPlaint={4}/>
            <li>Développement électronique : FPGA, Arduino</li>
            </ul>            
            <div>

            </div>
            <div className="sl-petit-barre">
            </div>
            <h2> Soft Skills</h2>
            <ul className="sl-competences">
            <Niveau cPlaint={5}/>
            <li> Autonomie</li>
            <Niveau cPlaint={6}/>
            <li> Capacité d'apprentissage</li>
            <Niveau cPlaint={5}/>
            <li> Collaboration</li>
            <Niveau cPlaint={5}/>
            <li> Esprit critique</li>
            <Niveau cPlaint={5}/>
            <li> Organisé</li>
            <Niveau cPlaint={5}/>
            <li> Challenge </li>
            <Niveau cPlaint={3}/>
            <li> Communication</li>      
            </ul>
            <div className="sl-petit-barre">
            </div>
            <h2> Compétences lingustiques</h2>
            <ul className="sl-competences">
            <Niveau cPlaint={6}/>
            <li> Français</li>
            <Niveau cPlaint={4}/>
            <li> Anglais</li>
            <Niveau cPlaint={2}/>
            <li> Arabe</li>
            <Niveau cPlaint={1}/>
            <li> Italien </li>
            </ul>
        </div>   
    )
}

export default Competences