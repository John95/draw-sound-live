import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import API from "../../utils/API";

class Venue extends Component {
  state = {

  };

  componentDidMount() {
    // In case we need 
  }


  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1>Venue</h1>
              <p>This is in the render return statement in Pages/Venue</p>
              <p><a className="btn btn-primary btn-lg">Learn more</a></p>
            </div>
          </div>  
        </div>
      </div>      
    );
  }
}

export default Venue;



