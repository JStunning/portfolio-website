import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { FiChevronsDown } from 'react-icons/fi';

const AppShowcase = () => {
  const [contactInfoVisible, setContactInfoVisible] = useState(false);

  if(contactInfoVisible === false){
    return (
      <div className="App-showcase">
        <div className="showcase-overlay">
          <h1>Hi, I'm Jack Dunning.
            <br /> I'm a Web Developer currently looking for a job in Seattle.
          </h1>
          <p className="showcase-text">Interested in working together? Feel free to contact me for any project or collaboration.</p>
          <button className="contact-button" onClick={()=> {setContactInfoVisible(true)}}>Contact</button>
          <br />
          <a id="chevron" href="#chevron"><FiChevronsDown /></a>
        </div>
      </div>
    )
  } else if (contactInfoVisible === true) {
    return (
      <div className="App-showcase">
        <div className="showcase-overlay">
          <div className="ContactPage">
            <h2><u>Jack Dunning</u></h2>
            <div className="me-irl-info">
              <div className="me-irl">
                <img src="https://i.imgur.com/8B9Kpu9.jpg" alt="meirl"></img>
              </div>
              <div className="contact-card-content-row">
                <Typography><strong>Location:</strong> <br /> Seattle, WA, USA</Typography>
                <Typography><strong>Email:</strong> <br /> JackStunning9001@gmail.com</Typography>
                <Typography><strong>LinkedIn:</strong> <br /> <a href="https://www.linkedin.com/in/jackstunning/">https://www.linkedin.com/in/jackstunning/</a></Typography>
                <Typography><strong>Github:</strong> <br /> <a href="https://github.com/JackStunning">https://github.com/JackStunning</a></Typography>
              </div>
            </div>
            <button className="home-button" onClick={()=> {setContactInfoVisible(false)}}>Home</button>
          </div>
        </div>
      </div>
    )
  }


}

export default AppShowcase