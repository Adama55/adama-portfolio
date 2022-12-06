import React from "react"
import ImDevWeb  from '../../../../assets/imageFormation/imDevWeb.png'
import './Formations.css'

function Formations() {
    return (
        <div >
            <div className="sl-petit-barre">
            </div>
            <h2 className="sl-formation-titre"> Developpeur web</h2>
            <div className="sl-cadre-formation">
                <div className="sl-content-formation">
                    <p className="sl-ecole-formation">Chez Openclassrooms</p>
                    <p className="sl-lieu-periode">Paris, France | Mais - Novembre 2022</p>
                    <p className="sl-description-formation">
                        Contenu de la Formation :
                    <br/>Découper, assembler et intégrer tous les éléments d’une maquette graphique en HTML5 et CSS ;
                    <br/>Ajouter du contenu audio et vidéo en HTML5 ;
                    <br/>Animer les pages web avec CSS3 ;
                    <br/>Appliquer les standards du web et les normes en vigueur ;
                    <br/>Construire un site web fluide s’adaptant à tout type d’écran (web, smartphone et tablette) ;
                    <br/>Améliorer le référencement naturel en utilisant les balises selon leur sémantique ;
                    <br/>Faire réagir la page web en fonction des actions de l’utilisateur en JavaScript ;
                    <br/>Se connecter à un service web pour exploiter des données tierces (API) ;
                    <br/>Gérer les comptes utilisateurs ;
                    <br/>Concevoir un site maintenable grâce à la gestion des erreurs et exceptions ;
                    <br/>Créer, gérer et afficher le contenu d’une base de données.
                    </p>
                </div>
                <div className="sl-ulstration-image">
                    <img src= {ImDevWeb} alt=" formation developpeur web" />
                </div>
            </div>
            
        </div>
        )
}

export default Formations