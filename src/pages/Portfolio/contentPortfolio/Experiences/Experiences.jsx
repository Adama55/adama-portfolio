import React from "react"
import ExperiencesData from "../../../../assets/Datas/ExperiencesData"
import './Experiences.css'

function Experiences() {
    return (
        <div >
            {
                ExperiencesData.map((index) => {
                    return (
                        <div key={index.id}>
                            <div className="sl-petit-barre"></div>
                            <h2 className="sl-formation-titre">{index.poste}</h2>
                            <div className="sl-cadre-experience">
                                <div className="sl-content-experience">
                                    <p className="sl-entreprise-experience">{index.entreprise}</p>
                                    <p className="sl-lieu-periode">{index.date_lieu}</p>
                                    <p className="sl-description-experience">
                                        {
                                            index.contenu.map((content, indexe) => {
                                                return (
                                                    <>
                                                        <br key = {indexe}/> {content}
                                                    </>
                                                
                                                )
                                            })
                                        }
                                    </p>
                                    
                                </div>
                                <div className="sl-ulstration-imageExp">
                                    <img src= {index.ulisimage} alt=" ulistration-images" />
                                </div>
                            </div>
                        </div>
                    )
                })

            }
            
        </div>
    )
}

export default Experiences 