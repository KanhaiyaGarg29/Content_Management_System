import React from 'react'
import "./Button.css"
function Button({name, label, onClick}) {
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
        
         <button className="btns" name={name} onClick={() => onClick(name)}> {label}
        </button>
        
    </div>
  )
}

export default Button