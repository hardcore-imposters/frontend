import React, {Component} from "react";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {message:'Hello world!'};
    }
    render() {
       return(
        <>
        {console.log("NavBar props yo",this.props)}
        <h1>{this.state.message}</h1>
        <nav>
            <div className="NavItem">
            🦔 🦔 🦔 Omg hedgehogs everywhere 🦔 🦔 🦔
            </div>
        </nav>
        </>
       )
    }
}

export default NavBar;