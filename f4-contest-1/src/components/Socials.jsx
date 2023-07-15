import React from 'react'

function Socials({text,src}) {
  return (
    <div className="socials">
    <div className="social-pic">
      <img src={src} alt="social-pic"/>
    </div>
     <span>{text}</span>
  </div>
  )
}

export default Socials;