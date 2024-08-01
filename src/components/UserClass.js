import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name +"Child constructor");

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
    console.log(user);

    this.setState({
      userInfo: user,
    });

    console.log(this.props.name +"Child componentDidMount");
  }

  componentDidUpdate(){
    console.log(this.props.name +"Child componentDidUpdate");
  }

  componentWillUnmount(){
    console.log(this.props.name +"Child componentWillUnmount");
  }

  render() {
    console.log(this.props.name +"child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
