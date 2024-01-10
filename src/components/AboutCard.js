import React from "react"; 
function AboutCard({ title, icon, desc, buttontext, url }) {
  return (
    <div className="about-card">
      <div className="about-card-1">
        <h2>{title}</h2>
        <p>{desc}</p> 
        <br />  
        <a href={url} target="_blank" rel="noopener noreferrer">
        <button>{buttontext}</button>  
        
      </a>
      </div>
      <div className="about-card-icon">
        <img src={icon} alt={''} />
      </div>
    </div>
  );
}

export default AboutCard;
