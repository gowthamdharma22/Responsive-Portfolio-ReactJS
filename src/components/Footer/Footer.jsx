import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer_cont cont">
            <h1 className="footer_tit">GD</h1>

            <ul className="footer_lt">
                <li><a href="#about" className="footer_l">About</a></li>
                <li><a href="#skills" className="footer_l">Skills</a></li>
                <li><a href="#projects" className="footer_l">Projects</a></li>
            </ul>
            <div className="footer_soci">
                <a href="https://www.instagram.com/_.zero._lub._/" target={'_blank'}><i class='bx bxl-instagram' ></i></a>
                <a href="https://www.facebook.com/gowtham.guys/" target={'_blank'}><i class='bx bxl-facebook' ></i></a>
                <a href="https://twitter.com/Im_G_D" target={"_blank"}><i class='bx bxl-twitter' ></i></a>
            </div>
            <span className="footer_copy">Created by GD | &#169; All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
