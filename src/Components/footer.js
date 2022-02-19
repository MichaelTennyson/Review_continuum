import React from "react";
import './index.css';

function Footer(){
    return(
        <section className="footer">
            <hr className="footer-seperator"/>
            <section className="footer-social-media">
                <a href = "https://www.linkedin.com/" target="_blank" rel="noopner noreference">LinkedIn</a>
            </section>
            <section className="footer-info">
                <section className="footer-left"> 
                   <section className="footer-info-name">
                        Michael Tennyson
                    </section>
                    <section className="footer-details">
                        Computer science student
                        <br />
                        At TUDublin
                    </section>
                <section className="footer-center">
                    <section className="footer-info-email">
                        C18302166@mytudublin.ie
                    </section>
                    <section className="footer-info-terms" >
                        Terms and conditions
                        <br />
                        Copyright
                     </section>
                </section>
                <hr className="footer-seperator"/>
                <section className="footer-right">
                <section className="footer-info-number">
                        0899999999
                    </section>
                    <section className="footer-story" >
                        My story
                        <br />
                        Contact us
                     </section>

                </section>
            </section>
            <hr className="footer-seperator"/>
        </section>
        </section>
    )

}

export default Footer;