import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const Projects = () => {
  return (
    <div className="Projects">
      <h2><u>Projects</u></h2>
      <div className="project-cards">
        <div className="project-div">
          <Card className="project">
            <CardContent>
              <h3>Adventureon</h3>
              <a href="https://jackstunning.github.io/textAdventure/"><img className="project-img" src="https://i.imgur.com/fmM8ShI.jpeg" alt="project called Adventureon" /></a>
              <p className="source-code">(<a href="https://github.com/JackStunning/textAdventure">source code</a>)</p>
              <div className="project-content">
                <div className="project-content-text project-content-skills">
                  <h5>Skills</h5>
                  <Typography>Html</Typography>
                  <Typography>Css</Typography>
                  <Typography>Jquery</Typography>
                </div>
                <div className="project-content-text project-content-about">
                  <h5>About</h5>
                  <Typography>Short text based adventure where you can create a character and choose different paths to get a different story.</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="project-div">
          <Card className="project">
            <CardContent>
              <h3>World of Webscraping</h3>
              <img className="project-img" src="https://i.imgur.com/xlXJVp3.png" alt="project called World of Webscraping"></img>
              <p className="source-code">(<a href="#">source code</a>)</p>
              <div className="project-content">
                <div className="project-content-text project-content-skills">
                  <h5>Skills</h5>
                  <Typography>MongoDB</Typography>
                  <Typography>Express</Typography>
                  <Typography>React</Typography>
                  <Typography>Node</Typography>
                  <Typography>Puppeteer</Typography>
                </div>
                <div className="project-content-text project-content-about">
                  <h5>About</h5>
                  <Typography>World of Warcraft Classic tool that helps users build their characters. Scrapes the WoW wiki and pushes the data to the database. The client recieves the data from the database and stores it until the user needs it.</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="project-div">
          <Card className="project">
            <CardContent>
              <h3>Acolyte</h3>
              <img className="project-img" src="https://i.imgur.com/DdnB6Aa.png" alt="code" />
              <p className="source-code">(<a href="https://github.com/n0remac/Pyweek">source code</a>)</p>
              <div className="project-content">
                <div className="project-content-text project-content-skills">
                  <h5>Skills</h5>
                  <Typography>Python</Typography>
                  <Typography>PyGame</Typography>
                  <Typography>Python Arcade</Typography>
                </div>
                <div className="project-content-text project-content-about">
                  <h5>About</h5>
                  <Typography>My first Python project, a video game my friends and I made for a game jam. I made the enemies, enemy spawning and pathing while my team worked on the rest of the game.</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
  
export default Projects