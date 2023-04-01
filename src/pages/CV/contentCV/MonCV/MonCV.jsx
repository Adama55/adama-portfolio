import React from "react"
import  './MonCV.css'
import CVPDF from '../../../../assets/CV_FOFANA_Adama_Dev_react.pdf'


function MonCV () {
    return (
    <div className="sl-mon-cv">
        <p>
            <embed src={CVPDF} width="100%" height="900" type="application/pdf"/>
        </p>       
    </div>
    )
}

export default MonCV