import React from "react"
import Logotype from '../../../../assets/imageService/logotype.png'
import Affiche from '../../../../assets/imageService/affiche.png'
import CarteVisite from '../../../../assets/imageService/carteVisite.png'
import  './Services.css'

function Services (){
    return(
        <div>
            <div className="sl-services-header">
                <h2> Conception logo, affiche et carte de visite  </h2>
            </div>
            <div className="sl-services-content">
                <p>
                    Je conçois des logos, affiches publicitaires, cartes de visites et cartes d'invitations.
                    <br/>J'accompagne mes clients à choisir leurs logos, 
                    à structurer leurs pages réseaux sociaux ou des 
                    techniques pour attirer plus de clients. 
                </p> 
                <div className="sl-image-concep"> 
                    <img src={Logotype} alt=" exemple de logo Bay Makup" />
                    <img src={Affiche} alt=" exemple d'affiche publicitaire"/>
                    <img src={CarteVisite} alt=" exemple de carte de visite"/>
                </div>
                                 
            </div>
        </div>
    )
}

export default Services