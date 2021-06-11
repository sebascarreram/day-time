import React from "react";
import NavigationLink from "./NavigationLink/NavigationLink";

class Nav extends React.Component {
  state = {
    loggedIn: false,
  };

  handleLogin = () => {
    console.log(this.state.loggedIn);
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };
  render() {
    let status = this.state.loggedIn ? (
      <NavigationLink href="#" onClick={this.handleLogin} text="Logout" />
    ) : (
      <NavigationLink href="#" onClick={this.handleLogin} text="Login" />
    );
    return (
      <nav className="nav">
        <NavigationLink href="#" text="Home" />
        <NavigationLink href="#" text="About" />
        <NavigationLink href="#" text="Contact" />
        {status}
      </nav>
    );
  }
}
export default Nav;
