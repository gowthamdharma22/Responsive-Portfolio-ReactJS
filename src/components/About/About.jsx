import React from "react";
import "./About.css"
import Fade from 'react-reveal/Fade';

export default function About(){
    return(
        <section className="about" id="about">
        <Fade>
            <div>
                <img src="/img/APimg.png" className="about-img" alt=""/>
            </div>
        </Fade>
        <Fade>
            <div className="about-cont">
                <h2 className="heading">About <span className="text-style">Me</span></h2>
                <p className="first-p">I enjoy taking complex problems and turning them into simple and beautiful game designs. 
                    I also love the logic and structure of coding and always strive to write elegant and 
                    efficient code. Whether it be HTML, CSS, React, GDScript.</p>
                <p className="second-p">When I'm not coding or animating pixels, you'll find me in the gym or in the coffee shop.</p>
                <a className="button-56" role="button" href="resume/GD_Resume.pdf">Download CV</a>
            </div>
        </Fade>
    </section>
    )
}