import React from "react"
import ImMonCV from '../../../../assets/imMonCV.png'
import  './MonCV.css'


function MonCV () {
    return (
    <div className="sl-mon-cv">
        <img src={ImMonCV} alt="CV de Adama FOFANA" />
        <p>
            <a href='https://drive.google.com/file/d/1CNC4rLfRjxzVVZRCgzZopLQ7-Zf_nnXR/view?usp=sharing'> Télecharger le CV en versin PDF</a>
        </p>        
    </div>
    )
}

export default MonCV