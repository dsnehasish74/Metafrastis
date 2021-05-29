import React from 'react'
import HeroImage from './asset/hero.svg'
import {Link} from 'react-router-dom';
 const Landing = () => {
    return (
        <div className="main_container">
        <div className="Hero-container">

            <div className="hero-text">
                <h1 className="company_name">Edunation</h1>
                <h1>Re-imagine online Education. Make your online classes more easy , fun and interactive </h1>
                <Link to="/signin"><button className="hero-button">Get started</button></Link>
            </div>
            <div>
                <img className="hero-image" src={HeroImage} alt="hero"></img>
            </div>
        </div>
        </div>
    )
}
export default Landing;