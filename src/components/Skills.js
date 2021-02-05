import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

//skills section
const Skills = () => {
  return (
    <div id="Skills" className="Skills">
      <h2><u>Skills</u></h2>
      <div className="Skills-cards">
        <div className="skill-div">
          <Card className="skill">
            <CardContent>
              <h3>Languages</h3>
              <Typography>Javascript</Typography>
              <Typography>HTML</Typography>
              <Typography>CSS</Typography>
              <Typography>C#</Typography>
              <Typography>Python</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="skill-div">
        <Card className="skill">
          <CardContent>
            <h3>Other Technologies</h3>
            <Typography>React</Typography>
            <Typography>Jquery</Typography>
            <Typography>Sass</Typography>
            <Typography>GraphQL</Typography>
            <Typography>SQL</Typography>
            <Typography>MongoDB</Typography>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  ) 
}

export default Skills
