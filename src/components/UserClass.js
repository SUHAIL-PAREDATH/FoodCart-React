import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name +"Child constructor");

    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy location",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SUHAIL-PAREDATH");
    const user = await data.json();
    // console.log(user);

    this.setState({
      userInfo: user,
    });

    // console.log(this.props.name +"Child componentDidMount");
  }

  componentDidUpdate(){
    // console.log(this.props.name +"Child componentDidUpdate");
  }

  componentWillUnmount(){
    // console.log(this.props.name +"Child componentWillUnmount");
  }

  render() {
    // console.log(this.props.name +"child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="">
        <div className=" flex items-center justify-center">
        <img className="flex items-center" src={avatar_url}></img>
        </div>
        <div className="p-4">
        <h2  >Name : {name}</h2>
        <h3>Location : {location}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
