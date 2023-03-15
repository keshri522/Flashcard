import React from 'react';
// import { faFacebook,faGithub, faLinkedin,faInstagram} from "@fortawesome/free-brands-svg-icons";
// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShare } from '@fortawesome/free-solid-svg-icons';
import {  FacebookShareButton , LinkedinShareButton,WhatsappShareButton,TwitterShareButton, FacebookIcon,  LinkedinIcon,  TwitterIcon,  WhatsappIcon,} from "react-share"

const Sharemodal = () => {
    const CurrentpageUrl=window.location.href;
    return (
      <>
        
        <div className='  share  '>
            <FacebookShareButton
               url={CurrentpageUrl}
               quote="Plese Share"
               hashtag='#Code'>
                <FacebookIcon className=' my-2  icons' iconFillColor="white" size ={34} round={true} />
               </FacebookShareButton>
               
            <WhatsappShareButton
                url={CurrentpageUrl} >
                <WhatsappIcon className='my-2 icons' iconFillColor="white" size ={34} round={true}/>
           </WhatsappShareButton>

           <LinkedinShareButton
            url={CurrentpageUrl} >
          
                   <LinkedinIcon className='my-2 icons' iconFillColor="white" size ={34} round={true}/>
           </LinkedinShareButton>

           <TwitterShareButton 
           url= {CurrentpageUrl}>  
            <TwitterIcon className='my-2 icons' iconFillColor="white" size={34} round={true}/>
           </TwitterShareButton>
        </div>
        </>
   
    );
};

export default Sharemodal;