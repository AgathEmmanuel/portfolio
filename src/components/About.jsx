import "./About.css"
import mybigimage from "../../src/image/mybigimage.png"


const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <h1 className="about-heading">More About me</h1>
            <p className="about-subject">
                Ever since I was a child, I used to look into how things work simply out of Curiousity.
                It was during my Bachelors in Technology that I got real
                exposure to the World of Computing Technology and its impact on our lives. From there it's
                been a continous journey of exploration and learning. 
            <br></br>
            <br></br>

                The field of technology is changing super fast and I strongly believe that
                Being able to Adapt Fast and having the Mindset to Learn Efficiently is the key.
            </p>
            <br></br>
            <br></br>
            <ul>
              <li>More than one year of experience in the Tech industry</li>
            <p> 2021-present,  UST, India</p>
              <li>Completed my Bachelors in Electronics & Communication Engineering</li>
            <p> 2016-2020,  APJ Abdul Kalam Technological University, India</p>
            </ul>

            <br></br>
            <br></br>

            <h2 className="about-upto-heading"> What am I upto ?</h2>
            <p> Improving my System Design and DSA skills</p>
            <p> Focusing on Software Design Patterns </p>
            <p> Learning Microservices with MERN stack </p>
            <p> Looking to collaborate on Open Source DevOps Tools </p>
            <p> Exploring Progressive Web App Development </p>
            <p> Ask me about </p>
            <ul>
            <li> Microservices</li>
            <li> Cloud Computing</li>
            <li> Kubernetes Native Application Development</li>
            <li> Kubernetes Administration</li>
            <li> Devops and GitOps workflows</li>
            </ul>
            <br></br>
            <p>Apart from my interest in Tech, I love</p>
            <ul>
              <li>Traveling</li>
              <li>Drawing</li>
              <li>Playing Football</li>
            </ul>
            <br></br>
            <br></br>


        </div>
        <div className="about-right">


            <div className="about-left-container">
                    <img src={mybigimage}
                     alt=""
                     className="about-image" />
            </div>



        </div>
      
    </div>
  )
}

export default About
