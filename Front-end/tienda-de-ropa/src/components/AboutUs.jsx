import React from 'react';
import AdamVass from './assets/AdamVass.jpg';
import BradleyVanderLugt from './assets/BradleyVanderLugt.jpg';
import ChadSterenberg from './assets/ChadSterenberg.jpg';
import CoreyStroffolino from './assets/CoreyStroffolino.jpeg';
import JordanDreyer from './assets/JordanDreyer.jpg';

function AboutUs() {
  return (
    <>
        <h1 className="Title">About Us</h1>
        <h3 className="Title">We are La Dispute, a band formed by the year 2004 from Grand Rapids, Michigan. </h3>
        <div className="AboutUsBox">
            <div className="AboutUs">
                <div className="eachOneOfUs">
                    <img src={AdamVass} alt="Adam Vass" className="photo"/>
                    <h2>Adam Vass</h2>
                    <h3>Bassist</h3>
                </div>
                <div className="eachOneOfUs">
                    <img src={BradleyVanderLugt} alt="Bradley Vander Lugt" className="photo"/>
                    <h2>Bradley Vander Lugt</h2>
                    <h3>Drummer</h3>
                </div>
                <div className="eachOneOfUs">
                    <img src={ChadSterenberg} alt="Chad Sterenberg" className="photo"/>
                    <h2>Chad Sterenberg</h2>
                    <h3>Guitarrist</h3>
                </div>
                <div className="eachOneOfUs">
                    <img src={CoreyStroffolino} alt="Corey Stroffolino" className="photo"/>
                    <h2>Corey Stroffolino</h2>
                    <h3>Guitarrist</h3>
                </div>
                <div className="eachOneOfUs">
                    <img src={JordanDreyer} alt="Jordan Dreyer" className="photo"/>
                    <h2>Jordan Dreyer</h2>
                    <h3>Vocalist</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs