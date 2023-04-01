import React from "react"
import './Formations.css'
import FormationsData from '../../../../assets/Datas/FormationsData'

function Formations() {
    
    
    return (
        <div >
            
            {
                FormationsData.map((index) => {
                    return(
                        <div key={index.id} >
                            <div className="sl-petit-barre"></div>
                            <h2 className="sl-formation-titre"> {index.titre}</h2>
                            <div className="sl-cadre-formation">
                                <div className="sl-content-formation">
                                    <p className="sl-ecole-formation">{index.ecole}</p>
                                    <p className="sl-lieu-periode">{index.date_lieu}</p>
                                    <p className="sl-description-formation">
                                        Contenu :
                                        {
                                        index.contenu.map((content, indexe) => {
                                            return <li key ={indexe}>{content}</li>
                                        })
                                        }
                                    </p>
                                </div>
                                <div className="sl-ulstration-image">
                                    <img src= {index.ulisimage} alt=" formation developpeur web" />
                                </div>
                            </div>                 
                        </div>                          
                    )
                })                
            }
            
        </div>
        )
}

export default Formations