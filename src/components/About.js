import React from "react";
import AboutCard from "./AboutCard";
import devops from "../assets/icons/icons8-devops-60-light.png"; 
import linux from "../assets/icons/icons8-linux-100-light.png";
import ansible from "../assets/icons/ansible-icon.svg"; 
import Ielectro from "../assets/images/partners/ielectro-fix-solutions.png"; 

function About() {
  return (
    <section id="about">
      <div className="about-info space-x-1">
        <div className="about-cards">
          <AboutCard
            title="Ansible"
            desc="I write playbooks and contribute to the Ansible Project"
            icon={ansible}
            projects={19}
            url={"https://github.com/tmeralus?tab=repositories&q=ansible&type=&language=&sort="}
          />
          <AboutCard
            title="Linux"
            desc="I use Linux as my daily driver and build solutions and solve problems for clients and build apps."
            icon={linux}
            projects={10}
            url={"https://github.com/tmeralus?tab=repositories&q=docker&type=&language=&sort="}
          />
          <AboutCard
            title="Devops"
            desc="I use Devops practices to develop automated solutions for local and cloud environments"
            icon={devops}
            projects={7}
            url={"https://github.com/tmeralus?tab=repositories&q=devops&type=&language=&sort="}
          />
        </div>
        <div className="about-info-1">
          <p>BIO</p>
          <h1>I'm Tedley Meralus</h1>
          <br />
          <p>
            I am a Linux Engineer who has successfully turned my passion into a professional career.
            I've had the opportunity to enhance my expertise by collaborating with different
            companies and clients and continue to grow as the tech industry does. 
            <br />
            <br />
            I do my best to share my experiences and solutions to problems I come across in my blogs. 
            In my free time, when im not watching my daughter amaze me as she grows, I'm reading, gaming, and building applications. 
            <br />
            <br />
            Whenever possible, I provide freelance services for troubleshooting open source software, web development, and IT consulting.
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
