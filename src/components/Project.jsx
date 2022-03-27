import React from "react";
import './Project.css'

const Project = (props) => {
  return (
    <div className="project-container">
    <div className="project">
        <div className="project-top">
      <h2>{props.projectData.name}</h2>
        </div>
        <div className="project-middle">
      <p>{props.projectData.description}</p>
        </div>
        <div className="project-bottom">
      <a className='project-linkto' href={props.projectData.linkto} target="_blank" rel="noreferrer">Source Code</a>
        </div>
    </div>
</div>
  );
};

export default Project;
