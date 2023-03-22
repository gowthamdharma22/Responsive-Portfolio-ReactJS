import React from "react";
import Fade from 'react-reveal/Fade';
import "./Home.css"

export default function Home(){
    return(
        <section class="home" id="home">
        <Fade left className="home-cont">
            <div className="home-cont">
                <h3>Hi, I'm</h3>
                <h1>Gowtham Dharma</h1>
                <h3>A <span className="text-style">React developer, GoDot developer.</span></h3>
                <a href="https://github.com/gowthamdharma22" target={"_blank"}><i class='bx bxl-github' ></i></a>
                <a href="https://twitter.com/Im_G_D" target={"_blank"}><i class='bx bxl-twitter' ></i></a>
                <a href="https://www.linkedin.com/in/gowtham-dharma-e-0a463a232/" target={"_blank"}><i class='bx bxl-linkedin' ></i></a>
                <a href="https://wa.me/918778166852" target={"_blank"}><i class='bx bxl-whatsapp' ></i></a>
            </div>
        </Fade>
        <Fade right>
            <div class="p-img">
                <img src="/img/Pimg.png" className="img" alt="My Image"/>
            </div>
        </Fade>
    </section>
        
    )
}