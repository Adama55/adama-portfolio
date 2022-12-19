import React from "react"
import './Contact.css'
import ImPortait from '../../assets/imPortrait.png'
import IconLink from '../../assets/iconLink.png'
import IconGmail from '../../assets/iconGmail.png'
import IconTweet from '../../assets/iconTweet.jpg'
import IconGithub from '../../assets/iconGithub.png'

function Contact () {
    return (
        <section>
            <div className="sl-disponibe" >
              <p>A l'écoute d'une opportunité </p>
            </div>
          <div className="ls-conatct">
			<div className="sl-portrait">
				<img src={ImPortait} alt=" portrait de Adama Fofana"/>
			</div>
			<div className="sl-content-contact">
				<a href="mailto:adamadev55@gmail.com" target="_blank"><img src={IconGmail} alt=" icon Gmail"/>adamaDev55@gmail.com</a>
				<br/>
				<a href="https://github.com/Adama55" target="_blank"><img src={IconGithub} alt=" icon GitHub"/>Dépot Git</a>
				<br/>
				<a href="https://www.linkedin.com/in/fofana-adama/" target="_blank"><img src={IconLink} alt=" icon linkedin"/>Profil Linkedin</a>
				<br/>
				<a href="https://twitter.com/adamaDev<" target="_blank"><img src={IconTweet} alt=" icon Tweet"/>Compte Twitter</a>
				<br/>
			</div>
			</div>							
								
		</section>
    )
}

export default Contact