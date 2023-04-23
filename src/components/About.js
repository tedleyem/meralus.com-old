import React from "react";
import AboutCard from "./AboutCard";
import phone from "../assets/icons/mobile-screen-button-solid.svg"; 
import docker from "../assets/icons/docker-icon.svg";
import ansible from "../assets/icons/ansible-icon.svg"; 
import Ielectro from "../assets/images/partners/ielectro-fix-solutions.png"; 

function About() {
  return (
    <section id="about">
      <div className="about-info space-x-1">
        <div className="about-cards">
          <AboutCard
            title="Ansible"
            desc="I create designs with playbooks with unique ideas to provide solutions for keeping applications running and secure."
            icon={ansible}
            projects={19}
            url={"https://github.com/tmeralus?tab=repositories&q=ansible&type=&language=&sort="}
          />
          <AboutCard
            title="Docker"
              desc="I use docker to shrink monolithic applications and use modern practices to make them scalable."
            icon={docker}
            projects={10}
            url={"https://github.com/tmeralus?tab=repositories&q=docker&type=&language=&sort="}
          />
          <AboutCard
            title="Devops"
            desc="I develop cross-platform application solutions for multi-cloud environments"
            icon={phone}
            projects={7}
            url={"https://github.com/tmeralus?tab=repositories&q=devops&type=&language=&sort="}
          />
        </div>
        <div className="about-info-1">
          <p>BIO</p>
          <h1>I'm Tedley Meralus</h1>
          <p>
            I have turned my passion into a professional career as it has been my lifelong
            ambition. I am now a talented Software Engineer with a strong Linux based background.
             I've had the opportunity to enhance my expertise by collaborating with different
            companies and clients and continue to grow as the tech industry does. I do my best to share my experiences and solutions to problems I come across. Feel free to check out some of my work or read my blog. 
            <br />
            <br />
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
