import React from 'react'
import student from "../../assets/images/students.png";
import "./gallery.css"
const Gallery = () => {
  return (
    <div>
      <div id="gallery" style={{ backgroundColor: "yellow" }}>
        <h2>Gallery</h2>
        <div className="gallery-image">
          <img src={student} alt="Student" />
        </div>
      </div>
    </div>
  );
}

export default Gallery