import React from "react"
import ImPass from '../../../../assets/imPass.png'


function EngSocial () {
    return (
        <div> 
            <div className="sl-petit-barre"></div>
            <div>
                <h2>Responsabilité et Vie Associative</h2>
                <ul className="sl-responsabilite">
                    <li>Co-fondateur de l’associaton APES (Association pour la promotion de l’Entrepreunariat à San).</li>
                    <li>Responble de la commission Ekalan ( site d’apprentissage) de l’assotion NOVEM (Nouvelle Vision pour l’éducation au Mali).</li>
                    <li>Deux fois, délegué de la promotion à l'université</li>
                    <li>Membre AVB-Mali (Association Vaincre le Begaiement au Mali)</li>
                    <li>Finaliste du Premier concours d’éloquence reservé aux personnes bègues en collaboration avec APB (association parole et begaiement). 2019</li>
                    <li>Membre organisatur de la deuxième edition</li>
                    <img src={ImPass} alt="capture de mon passage au concours d'éloquence"/>
                </ul>

            </div>
            <div className="sl-petit-barre"></div>
            <div>
            <h2>Hobbies</h2>
            <ul>
                <li>Lecture (livre de développement personnels)</li>
                <li> Films & Series & Documentaire (sciences fictions)</li>
                <li> Jeux video (Forge of empire)</li>
                <li>Actualité</li>
                <li> Débat & Echange collectif</li>
            </ul>

            </div>
        </div>
    )
}

export default EngSocial