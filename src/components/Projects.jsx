import React from 'react';
import './Projects.css'
import Project from './Project';

const Projects = () => {
    const data=[
        {name:"MakeYourSpace",description:"A Social Platform to create Relations and Attachments that we create in real world, instead of not just being a networking platform",linkto:"https://github.com/AgathEmmanuel/MakeYourSpace"},
        {name:"RentIt",description:"A Renting Platform where you can rent out anything to anyone in your specified locality and beyond",linkto:"https://github.com/AgathEmmanuel/RentIt"},
        {name:"vKYCchain",description:"A Vedio KYC Platform based hyperledger fabric for Institution to improve there Business Workflow",linkto:"https://github.com/AgathEmmanuel/vKYCchain"},
        {name:"CyberHunterz",description:"A Threat Hunting Platform built on top ELK stack using Deep Learning techniques to facilitate continous analysis and detection",linkto:"https://github.com/AgathEmmanuel/CyberHunterz"}
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
