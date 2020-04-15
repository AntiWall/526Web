import React from 'react'
import logo from './1.jpg';
import ReactPlayer from "react-player"

const ProjectSummary = () => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Project Report</span>
                <p>Posted by Team Core</p>
                <p className="grey-text"> 1st April, 2020</p>
                <img src={logo} alt="UI" height="400"></img>
                <p>This is the basic UI for out game</p>
            </div>
            <div>	Chi Bi - Battle of Red Cliff is a single-player 2D card game integrated with strategy play based on the history of the legendary Three Kingdom Dynasty.</div>
            <div className="card-title">Our Previous development Progress:</div>
            <br></br>
            <div>            <ReactPlayer
        url="https://youtu.be/_OVppTcij1Y"
      /></div>
      <br></br>
           <div>            <ReactPlayer
        url="https://youtu.be/UDwVx2e44WM"
      /></div>
            <br></br>
            <div className="card-content grey-text text-darken-3">
                <p className="card-title">Our Team Member:</p>
                <p>{"Yihang Wang yihangw@usc.edu"}</p>
                <p>Ruizhe Wang	  ruizhew@usc.edu</p>
                <p>Junquan Yu	  junquany@usc.edu</p>
                <p>Shaoyu Han	  shaoyuha@usc.edu</p>
                <p>You Wu youwu@usc.edu</p>
            </div>
        </div>
    )
}

export default ProjectSummary