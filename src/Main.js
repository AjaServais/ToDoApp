import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router";

class Main extends Component {

  render() {

    return (
      <div className="Home">

        <nav className="todoPage">
          <div className="btn-group">
          <button type="button" className="btn btn-warning link">
            <Link to="/"> MAIN </Link>
          </button>
          <button type="button" className="btn btn-warning link">
            <Link to="/About"> ABOUT </Link>
          </button>
          </div>
        <h1 className="todoHeader">Accomplishments</h1>

        </nav>


          {this.props.children}
      </div>
    );
  }
}

export default Main;
