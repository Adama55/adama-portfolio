import React from "react"
import './Contact.css'

function Contact () {
    return (
        <section className="ls-conatct">
					<div>
						<div>
							<form id="form_1" novalidate data-success-msg="Your message has been sent." data-fail-msg="Sorry it seems that our mail server is not responding, Sorry for the inconvenience!">
								<div>
									<label>
										Nom
									</label>
									<input id="name" class="form-control" required />
								</div>
								<div>
									<label>
										Adresse email
									</label>
									<input id="email" class="form-control" type="email" required />
								</div>
								<div>
									<label>
										Comment nous avez-vous connu ?
									</label>
									<input  type="email" required id="input_504" />
								</div>
								<div >
									<label>
										Brief de votre projet (Ajoutez autant de détails que nécessaire)
                                        <br/>
									</label><textarea id="message"  rows="4" cols="50" required></textarea>
								</div> 
								<button type="submit">
									Envoyer
								</button>
							</form>

							
								<p>
									<a href="mailto:adamadev55@gmail.com<">adamaDev55@gmail.com</a>
									<br/>text<br/>hhhh<br/>
								</p>
							
						</div>
				</div>
			</section>
    )
}

export default Contact