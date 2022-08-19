import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faFacebook,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function SocialFollow(){
    
    return (
          <div className="social-container">
             <h3>{'\u00A9'}Nitin1901</h3>
             
             <a href="https://twitter.com/Nitin46709" target="_blank" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
             <a href="https://www.instagram.com/nitin._.nayak/" target="_blank" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
             <a href="https://www.linkedin.com/in/nitin-ramavath-9b651220b/" target="_blank" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
          </div>  
    )
}