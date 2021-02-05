import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const Projects = () => {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      <div className="project-cards">
        <div className="project-div">
          <Card className="project">
            <CardContent>
              <h3>Adventureon</h3>
              <a href="https://jackstunning.github.io/textAdventure/"><img className="project-img" src="https://i.imgur.com/fmM8ShI.jpeg" alt="code"></img></a>
              <Typography>Html</Typography>
              <Typography>Css</Typography>
              <Typography>Jquery</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="project-div">
          <Card className="project">
            <CardContent>
              <h3>Project Name</h3>
              <img className="project-img" src="https://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg" alt="code"></img>
              <Typography>Javascript</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="project-div">
          <Card className="project">
            <CardContent>
              <h3>Project Name</h3>
              <img className="project-img" src="https://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg" alt="code"></img>
              <Typography>Javascript</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
  
export default Projects