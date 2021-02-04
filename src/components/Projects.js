import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const Projects = () => {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      <div className="project-cards">
        <Card className="project">
          <CardContent>
            <h3>Project Name</h3>
            <img className="project-img" src="https://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg" alt="code"></img>
            <Typography>Javascript</Typography>
          </CardContent>
        </Card>
        <Card className="project">
          <CardContent>
            <h3>Project Name</h3>
            <img className="project-img" src="https://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg" alt="code"></img>
            <Typography>Javascript</Typography>
          </CardContent>
        </Card>
        <Card className="project">
          <CardContent>
            <h3>Project Name</h3>
            <img className="project-img" src="https://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg" alt="code"></img>
            <Typography>Javascript</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
  
export default Projects