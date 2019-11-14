import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./NavBar.scss"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hardcore Imposters',
            url: ''
        };
    }

    historyLink = () => {
        const { history } = this.props;
        if(history) history.push(`${this.url}`);
    }

    render() {
       return(
        <div className="nav-bar">
        {console.log("NavBar props yo sonnn",this.props)}

        <h1>{this.state.message}</h1>
        
            <Link to="/" className="nav-item">Home</Link> {' '}
            <Link to="/profile" className="nav-item">Profile</Link> {' '}
            <Link to="/blah" className="nav-item">blah</Link> {' '}
            <Link to="/bye" className="nav-item">Bye</Link> {' '}
        </div>
       )
    }
}

export default NavBar;