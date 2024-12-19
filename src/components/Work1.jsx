            
import "./Work1.css"
import mywork1 from "../../src/image/phaidra_virtual_plant_operator.png"


const Work1 = () => {
  return (
    <div className="work">
        <div className="work-right">
            <h1 className="work-heading">What do I do ?</h1>
            <br></br>
            <div className="work-description">
                I'm am presently working as part of the
                <p id="work-word"> Site Reliability Engineering </p>
                team at Phaidra to ship reliable AI recomendations to our customers.
            <br></br>
                Phaidra creates AI-powered control systems for the industrial sector, enabling industrial facilities to automatically learn and improve over time.
                Our Ai-powered control systems enables the industrial facilities to automatically learn and improve over time.
                We use Reinforcement Learning algorithms to provide the intelligence, converting raw sensor data into high value actions and decisions.
            <br></br>
            <br></br>
                Our team is  Resoponsible for Building and Maintaining Infrastructure for:
            </div>
            <br></br>
            <div className="work-subject">
            <ul>

              <li>Large-scale data ingestion and processing. </li>
              <li>Distributed model training, evaluation and inference.</li>
              <li>Designing and implementing solutions to improve Infrastructure and Application Efficiency.</li>
              <li>Design infrastructure and drive its implementation to secure Phaidra and customer facing networks and systems.</li>
              <li>Automating the end-to-end system for continuous improvement and deployment.</li>
              <li>Work with GCP and on-premise hosting platforms.</li>
              <li>Work with Cloud Native technologies such as Kubernetes</li>
              <li>Help build CI/CD pipelines and take part in DevOps duties.</li>
              <li>Apply SRE principles for monitoring, automation and change management.</li>
              <li>Write and maintain tooling and documentation for infrastructure, supported applications and processes.</li>
              <li>Build and maintain cross-functional relationships with internal teams to drive initiatives</li>
              <li>Participating in general IT operations and support</li>
              <li>Make use of Security tools and processes to protect, monitor and remediate critical infrastructure using DevSecOps and SRE methodologies.</li>
              <li>Conducting Prod-Ops review, and helping out with COE's-Correction Of Errors's and Root Cause Analysis</li>
              <li>Setting up proper tooling and platform for seamles Developer Experience</li>
              <li>Setting up and Maintaining the Monitoring tooling and providing proper Observability stacks</li>
              <li>Take part in Producation on-call and help with Incident Management</li>
              <li>Administration of the different Infrastructure environments and executing Production deployments</li>

            </ul>
            </div>
            <div className="work-skills-container">
            <div className="work-skills">
            <h2 className="work-skills-heading">Tools and Technologies</h2>
            <div className="work-skills-list">
            <ul className="work-skills-list-left">
              <li>GCP</li>
              <li>Python</li>
              <li>Pants</li>
              <li>Kubernetes</li>
              <li>ArgoCD</li>
              <li>Atlantis</li>
              <li>Terraform</li>
              <li>Kapitan</li>
              <li>Kopf framework</li>
            </ul>
            <ul className="work-skills-list-right">
              <li>Microservices</li>
              <li>Rest & gRPC</li>
              <li>Crossplane</li>
              <li>Golang</li>
              <li>PyTorch</li>
              <li>Ray.io</li>
              <li>Prefect</li>
              <li>Prometheus</li>
              <li>Grafana Cloud</li>
            </ul>
          </div>
        </div>
    </div>
        </div>

        <div className="work-left">
            <div className="work-left-container1">
            </div>
            <div className="work-left-container2">
                    <img src={mywork1}
                     alt=""
                     className="work-image" />
            </div>

        </div>

      
    </div>
  )
}

export default Work1

