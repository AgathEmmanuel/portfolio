import React from 'react';
import './Projects.css'
import Project from './Project';

const Projects = () => {
    const data=[
        {name:"Aviator",description:"A k8s Operator for intelligent scaling and traffic routing. We will have a new resource type called aviator that routs traffic to the workloads based on request processing speed of the pods and does scaling as required.",linkto:"https://github.com/AgathEmmanuel/aviator"},
        {name:"Geni",description:"Geni is a lightweight, template-driven infrastructure generation tool that simplifies the creation and management of Kubernetes resources, Helm charts, Terraform files, and more — all driven by a single declarative YAML configuration.",linkto:"https://github.com/AgathEmmanuel/geni"},
        {name:"dDNS",description:"A DePIN project aimed towards decentralizing DNS. Internet could be free and DNS is connecting piece that should allow people to trasfer information with a central authority.",linkto:"https://github.com/AgathEmmanuel/ddns"},
    ];
  return (
     <div>
     <h2 className="projects-heading"> Some of the Projects I'm working on</h2>
    <div className='projects-container'>
    <div className='projects'>
            {data.map((info,i)=>(
                <Project key={i} i={i} projectData={info} />
            ))}
      
    </div>
    </div>
</div>
  )
}

export default Projects
