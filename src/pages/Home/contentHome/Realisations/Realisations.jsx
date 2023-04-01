import React from "react"
import './Realisations.css'
import RealisationsData from "../../../../assets/Datas/RealisationsData"

function Realisations() {
    return (
        <div>
            {
                RealisationsData.map((index) => {
                    return(
                        <div key={index.id} className ="sl-single-realisation">
                            <div className="sl-petit-barre">
                            </div>
                            <div className="sl-realisations-header">
                                <h2> {index.titre}</h2>
                            </div>
                            <div className="sl-realisations-content">
                                <p>
                                    {index.content}
                                    <ul>
                                        {index.acquis.map((content, indexe) => {
                                            return (
                                                <li key={indexe}>{content}</li>
                                            )
                                        })}
                                    </ul>
                                </p> 
                                <p>
                                    <a href={index.lien} target="_blank" className="sl-lien-git">
                                        <img src={index.icone} alt="logo gitHub"/>  
                                        {index.nomProjet}
                                    </a>
                                </p>                                 
                            </div>
                        </div>
                    )
                })
            }            
            
        </div>
    )
}

export default Realisations