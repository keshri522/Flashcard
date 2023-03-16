import React from 'react';
import { faFacebook, faInstagram ,faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SocialIcons = () => {
    return (
        <div>
        <div><h4 className='text-secondary'> Contact me </h4></div>
        <div className='fine'> 

            <NavLink  className="facebook" to="https://www.facebook.com/rahul.keshri.5011"><FontAwesomeIcon icon={faFacebook}/></NavLink>
            <NavLink className="linkdin"  to="https://www.linkedin.com/in/rahul-keshri-814bb8221/"><FontAwesomeIcon icon={faLinkedin}/></NavLink>
        </div>
        </div>
    );
};

export default SocialIcons;