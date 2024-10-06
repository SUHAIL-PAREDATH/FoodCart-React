import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full ">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">About Page</h1>
          <UserClass name={"First"} location={"Kerala"} />
          <userContext.Consumer>
            {({loggedUser})=><h1>{loggedUser}</h1>
            }
          </userContext.Consumer>
        </div>
      </div>
    );
  }
}


export default About;
