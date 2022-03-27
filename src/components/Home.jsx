import React from 'react'
import "./Home.css"
import myimage from "../../src/image/myimage.png"

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-left-container1">
          <div className="home-intro">
            <h1>Hi 👋, I'm Agath Emmanuel</h1>
          </div>

          <div className="home-title">
            <h2>Software Developer & Dev-Ops Enthusiast</h2>
            </div>
            <br></br>
            <div className='home-details'>
            <p>An Engineer who's passionate about Innovation and Technology.
            I Love everything about Software Development & System Desgn.
            Always Curious to Learn and Driven to Do More.</p>
          </div>
        </div>
      </div>

      <dif className="home-right">
        <img src={myimage} alt="" className='home-myimage' />
      </dif>
    </div>
  );
}

export default Home