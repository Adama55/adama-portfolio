import React from "react"
import IconGit from '../../../../assets/imageRealisation/iconGit.png'
import './Realisations.css'

function Realisations() {
    return (
        <div>
            <div>
            <div className="sl-petit-barre">
            </div>
            <div className="sl-realisations-header">
                <h2> Transformez une maquette en site web (HTML & CSS) </h2>
            </div>
            <div className="sl-realisations-content">
                <p>
                    A l'issu de ce projet, je suis capable d':
                    <ul>
                        <li>Etudier et découper une maquette;</li>
                        <li>Intégrer le contenu d’un site web conformément à la maquette;</li>
                        <li>Implémenter l’interface responsive;</li>
                    </ul>
                </p> 
                <p>
                     <a href="https://github.com/Adama55/Booki-reservation" target="_blank" className="sl-lien-git">
                        <img src={IconGit} alt="logo gitHub"/> 
                        Code BOOKI-reser vation est disponible ici
                    </a>
                </p>                                 
            </div>
            </div>
            <div></div>

        </div>
    )
}

export default Realisations