import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

class ContactPage extends React.Component {
  render(){
    return (
      <div className="App-showcase">
        <div className="showcase-overlay">
          <div className="ContactPage">
                  <h2><u>Jack Dunning</u></h2>
                  <h4>Contact info</h4>
                  <div className="me-irl-info">
                    <div className="me-irl">
                      <img src="https://i.imgur.com/8B9Kpu9.jpg" alt="meirl"></img>
                    </div>
                    <div className="contact-card-content-row">
                      <Typography><strong>Location:</strong> <br /> Seattle, WA, USA</Typography>
                      <Typography><strong>Email:</strong> <br /> JackStunning9001@gmail.com</Typography>
                      <Typography><strong>LinkedIn:</strong> <br />  https://www.linkedin.com/in/jackstunning/</Typography>
                      <Typography><strong>Github:</strong> <br />  https://github.com/JackStunning</Typography>
                    </div>
                  </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ContactPage;