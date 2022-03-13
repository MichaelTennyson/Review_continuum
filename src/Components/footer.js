import React from "react";
import './footer_index.css';

function Footer(){
    return(
        <div className="footer">
            <hr className="footer-seperator"/>
            <div className="footer-social-media">                    
                <a href = "https://www.linkedin.com/" target="link" rel="noopner noreference">LinkedIn</a>
             </div>
                <div className="footer-info">
                    <div className="footer-left"> 
                    <div className="footer-info-name">
                            Michael Tennyson
                        </div>
                        <div className="footer-details">
                            Computer science student
                            <br />
                            At TUDublin
                        </div>
                <hr className="footer-seperator"/>
                    <div className="footer-center">
                        <div className="footer-info-email">
                            C18302166@mytudublin.ie
                        </div>
                        <div className="footer-info-terms" >
                            Terms and conditions
                            <br />
                            Copyright
                        </div>
                    </div>
                <hr className="footer-seperator"/>
                    <div className="footer-right">
                    <div className="footer-info-number">
                            0899999999
                        </div>
                        <div className="footer-story" >
                            My story
                            <br />
                            Contact us
                        </div>

                    </div>
                </div>
                <hr className="footer-seperator"/>
            </div>
         </div>
    );

}

export default Footer;