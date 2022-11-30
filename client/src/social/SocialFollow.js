import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faFacebook,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function SocialFollow(){
    
    return (
          <div className="social-container">
             <h3 style={{color : "white"} }>{'\u00A9'}Nitin😎</h3>
             <a href="https://twitter.com" target="_blank" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
             <a href="https://www.facebook.com" target="_blank" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
             <a href="https://www.linkedin.com/in/" target="_blank" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
             <a href="https://www.instagram.com/" target="_blank" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
          </div>  
    )
}