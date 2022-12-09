import React from "react"
import ServicesData from "../../../../assets/Datas/ServicesData"
import  './Services.css'

function Services (){
    return(
        <div>
            {
                ServicesData.map((index) => {
                    return(
                        <div key = {index.id}>
                            <div className="sl-services-header">
                                <h2> {index.titre}</h2>
                            </div>
                            <div className="sl-services-content">
                                <p>
                                    {index.contenu} 
                                </p> 
                                <div className="sl-image-concep"> 
                                    {index.Exemple.map((content, indexe) => {
                                        return (
                                        
                                             <img  key = {indexe} src= {content}alt=" exemple de logo Bay Makup" />
                                        
                                        )
                                    })}                                            
                                </div>
                                                
                            </div>

                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Services