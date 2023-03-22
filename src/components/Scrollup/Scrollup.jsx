import React from 'react'
import "./Scrollup.css"

function Scrollup() {
    window.addEventListener("scroll",function(){
        const scrollUp=this.document.querySelector(".scroll");
        if(this.scrollY>=560) scrollUp.classList.add("show_scroll");
        else scrollUp.classList.remove("show_scroll");
    })
  return (
    <a href="#" className="scroll">
        <i className='bx bx-up-arrow-alt scroll_icon'></i>
    </a>
  )
}

export default Scrollup
