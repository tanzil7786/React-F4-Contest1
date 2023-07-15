import React from "react";
import './style.css';
import vectorpic from '../images/vector.png';

import Form from "./Foorm";

const Signup=()=>{



return (
   <div className="container">
    <div className="left">
      <h2>Find 3D Objects, Mockups <br />
        and Ilustration here</h2>
       <div className="image">
        <img src={vectorpic} alt="vector-pic" />
       </div>
    </div>
    <div className="right">
     <Form />
    </div>
   </div>
);
}

export default Signup;