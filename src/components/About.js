import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Page </h1>
        {/* <User name={"suhail (function)"} location={"Kerala"}/>  */}
        <UserClass name={"First"} location={"Kerala"} />
        <UserClass name={"Second"} location={"Kerala"} />
        <UserClass name={"Third"} location={"Kerala"} />
      </div>
    );
  }
}

// function About() {
//   return ( 
//     <div>
//         <h1>About Page </h1>
//         {/* <User name={"suhail (function)"} location={"Kerala"}/>  */}
//         <UserClass name={"suhail (class)"} location={"Kerala"}/>
//     </div>
//   )
// }

export default About;
