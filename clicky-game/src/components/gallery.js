import React from "react";
import "./gallery.css"

function Gallery(props) {
  return(
    <div className="img-container">
      <img 
      src={props.src}
      key={props.id}
      alt={props.alt}
      onClick={props.onClick}
      ></img>
    </div>
  )
}

export default Gallery;