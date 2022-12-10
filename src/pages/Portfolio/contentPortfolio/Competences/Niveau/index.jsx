import React from "react"
import '../Competences.css'

function Niveau ({cPlaint}) {
    let Nniveau = []
    let nflag = true
    for (let i= 0; i < 6; i++) {
        if( i === parseInt(cPlaint))
        {nflag = false}
        Nniveau.push(<div key={i} className={`sl-cerle`} id={`${nflag}`}></div>)
    }
    return(
        <div className="sl-range-cercle">
            {
                Nniveau
            }
        </div>
        
    )
}

export default Niveau