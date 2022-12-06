import React from "react"
import ImCtcase from '../../../../assets/imageExperience/imCtcase.png'
import './Experiences.css'

function Experiences() {
    return (
        <div >
            <div className="sl-petit-barre">
            </div>
            <h2 className="sl-formation-titre"> Ingénieur électronique</h2>
            <div className="sl-cadre-experience">
                <div className="sl-content-experience">
                    <p className="sl-entreprise-experience">Startup Ctcase</p>
                    <p className="sl-lieu-periode">Drancy, France | Avril - Novembre 2021</p>
                    <p className="sl-description-experience">
                    Mission:
                    <br/>Membre fondateur,
                    Chargé d’effectuer l’inventaire des matériels et passer la commande,
                    Mise en place des tests et les soudures électroniques.
                    A l’issue de cette expérience je suis capable d’établir le cahier de charge pour un projet de taille moyenne représentant les fonctionnalités et évaluer le coup budgetaire.
                    <br/>Environnement techniques :
                    <br/>Tinkercad 
                    Proteus
                    </p>
                </div>
                <div className="sl-ulstration-imageExp">
                    <img src= {ImCtcase} alt=" Equipe de Ctcase" />
                </div>
            </div>
            
        </div>
    )
}

export default Experiences 