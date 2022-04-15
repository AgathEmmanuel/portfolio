            
import "./Work.css"
import mywork from "../../src/image/mywork.png"


const Work = () => {
  return (
    <div className="work">
        <div className="work-left">
            <div className="work-left-container1">
            </div>
            <div className="work-left-container2">
                    <img src={mywork}
                     alt=""
                     className="work-image" />
            </div>

        </div>
        <div className="work-right">
            <h1 className="work-heading">What do I do ?</h1>
            <div className="work-description">
                I'm am presently working as part of a core
                <p id="work-word"> Platform Engineering </p>
                team at UST for our client 
                in bridging the gap between Software and Infrastructure to deliver smooth developer experience and 
                efficient designs. We are Resoponsible for:
            </div>
            <br></br>
            <div className="work-subject">
            <ul>
              <li>Developing Solutions and Automations to enable reliable product development </li>
              <li>Reliability, availability, latency, performance, efficiency, change management, monitoring, emergency response and capacity planning of the Kubernetes Cluster for applications, microservices and processes running on it</li>
              <li>Manage and prepare CI/CD piplines for automated process deploymnet, monitoring,alerting and the complete lifecycle of the applications.</li>
              <li>Designing solutions to improve infrastructure efficiency and developer experience.</li>
              <li>Implementation and practice of methodologies like GitOps, DevOps and DevSecOps.</li>
              <li>Continously Research on current and emerging technologies</li>
              <li>Technical point of contact for developers in building microservices on Kubernetes</li>
              <li>Proposing changes to designs for better efficiency</li>
              <li>Adoption and implementation of new technologies</li>
              <li>Incident management, eleminating single point of failure, failure mitigation and more </li>
              <li>Cloud trasitioning of on premise applications </li>
              <li>Work with production team to ensure successful execution of changes</li>
              <li>Administration of the Kubernetes cluster</li>
              <li>Security and compliance of applications on Kubernetes Infrastructure.</li>
            </ul>
            </div>
            <div className="work-skills-container">
            <div className="work-skills">
            <h2 className="work-skills-heading">Tools and Technologies</h2>
            <div className="work-skills-list">
            <ul className="work-skills-list-left">
              <li>Python</li>
              <li>Linux</li>
              <li>AWS</li>
              <li>Kubernetes</li>
              <li>Jenkins</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Golang</li>
              <li>Istio</li>
            </ul>
            <ul className="work-skills-list-right">
              <li>Helm</li>
              <li>FastAPI</li>
              <li>MERN</li>
              <li>PostrgreSQL</li>
              <li>Terraform</li>
              <li>OPA Gatekeeper</li>
              <li>Cloudformation</li>
              <li>Prometheus</li>
              <li>Skaffold</li>
            </ul>
            </div>
            </div>
</div>
        </div>
      
    </div>
  )
}

export default Work

