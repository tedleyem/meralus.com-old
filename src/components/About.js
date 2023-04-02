import React from "react";
import AboutCard from "./AboutCard";
import phone from "../assets/icons/mobile-screen-button-solid.svg"; 
import docker from "../assets/icons/docker-icon.svg";
import ansible from "../assets/icons/ansible-icon.svg"; 

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
            desc="I use docker to make monolithic applications portable and manageable."
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
          <h1>Hello, I'm Tedley Meralus</h1>
          <h3>The means of learning are abundant, The desire to learn is scarce</h3>
          <p>
            I have proceeded my dream to be developer as it has been my lifelong
            ambition. I am a talented Software Engineer with a strong Linux based background.
             I've had the opportunity to enhance my expertise by collaborating with different
            companies and by creating useful content for both business and
            customer use.
            <br />
            <br />I am naturally perserved, self-confident quietly curious,
            innovative and constantly challenging my skills.
          </p>
        </div>
      </div>
      <div className="partner space-x">
        <div className="pat-img ">
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
        <div className="pat-img marg-top-2">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
