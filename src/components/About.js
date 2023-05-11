import React from "react";
import AboutCard from "./AboutCard";
import devopslogo from "../assets/icons/icons8-cloud-96-white.png"; 
import consultinglogo from "../assets/icons/icons8-linux-100-light.png";
import programminglogo from "../assets/icons/icons8-programming-48-white.png"; 
import Ielectro from "../assets/images/partners/ielectro-fix-solutions.png";  

function About() {
  return (
    <section id="about">
      <div className="about-info space-x-1">
        <div className="about-cards">
          <AboutCard
            title="Linux"
            desc="I share my IT journey through Linux and cloud computing when I can"
            icon={consultinglogo} 
            buttontext="blogs" 
            url={""}
          />
          <AboutCard
            title="Cloud & Devops"
            desc="I develop automated solutions for local and cloud environments"
            icon={devopslogo} 
            buttontext="Projects" 
            url={"https://github.com/tmeralus?tab=repositories"}
          />
          <AboutCard
            title="IT Consulting"
            desc="I've partnered with IElectroFix Solutions to provide services for hardware and software related issues."
            icon={programminglogo} 
            buttontext="Services" 
            url={"https://ielectrosolutions.com/"}
          />
        </div>
        <div className="about-info-1">
          <p>BIO</p>
          <h1>I'm Tedley Meralus</h1>
          <br />
          <p>
            Based in South Florida, I am a Linux Engineer 
            who has turned my passion into a professional career
            over the past decade I've had the opportunity to work with different
            companies and independantly collaborate with clients 
            to deliver and devlop a list of services and solutions. 
            <br />
            <br /> 
            In my free time, when im not watching my daughter amaze me as she grows, 
            I'm reading, gaming, and building applications. 
            <br />
            <br />
            I provide freelance services for troubleshooting open source software,
            web development, linux based troubleshooting, cloud and IT consulting, and more.
            <br />
            <br />
            A quote I learn and live by: 
          <h3>The means of learning are abundant, The desire to learn is scarce</h3>
          </p>
        </div>
      </div>
      <div className="partner space-x">
        <div className="pat-img ">
          <a href='https://ielectrosolutions.com'>
          <img src={Ielectro} alt="IelectroFix Solutions" />
          </a></div>
        <div className="pat-img marg-top-2">
          <img src="" alt="" />
        </div>
        <div className="pat-img marg-top-2">
          <img src="" alt="" />
        </div>
        <div className="pat-img marg-top-2">
          <img src="" alt="" />
        </div>
        <div className="pat-img marg-top-2">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
