import { useRef } from "react";
import { TypingEffect } from "../components/typing";
import "../pages/home.css";
import { projects, skills } from "../src/assets/asset";
import { Contact } from "./contact";


export const Home = () => {
  const handleResume=()=>{
    window.open("/resume.pdf", "_blank");
  }
  const projectref=useRef(null);
  const viewProjects=()=>{
    projectref.current.scrollIntoView({behaviour:"smooth",block:"start"})
  }
  return (
    <div>
      <div className="Container">
        <div className="intro">
          <h1>Hi I&apos;m Tanish 👋</h1>
          <p>
            Aspiring <span><TypingEffect /></span>
          </p>

          <div className="btns">
            <button onClick={viewProjects}>View Projects</button>
            <button onClick={handleResume}>Resume</button>
          </div>
        </div>

        <div className="image">
          <img src="avtar.PNG" alt="avatar" />
        </div>
      </div>

      <div className="skills-aboutme">
        <div className="about">
          <h2>About Me</h2>
          <p>
            Hi, I’m Tanish Batra, a first-year B.Tech CSE student with a
            strong interest in full stack development and problem-solving. I
            enjoy turning ideas into responsive, user-friendly websites and
            exploring new technologies that make the web better.
          </p>
        </div>

        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.logo} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      
      </div>
      <hr />
      <div className="projects" ref={projectref}>
        <h2>Projects</h2>
        <div className="projects-section">
        <div className="project-container">
          {
          projects.map((value,index)=>(
            <div className="projects-details">
              <h3>{value.name}</h3>
              <p>{value.description}</p>
              <img src={value.image} alt="project imgae" />
              <div className="links">
                <button>Code</button>
                <button>Live</button>
              </div>
            </div>

          ))
          }

        </div>
       
        </div>
      </div>
      <hr />
      <div>
       
        <div><Contact/></div>
      </div>
     
    </div>
  );
};
