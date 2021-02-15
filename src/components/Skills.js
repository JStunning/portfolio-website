import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

//skills section
const Skills = () => {
  return (
    <Card id="skills-container">
    <div id="Skills" className="Skills">
      <h2><u>Skills</u></h2>
      <div className="skills-cards">
        <div className="skill-div">
          <Card className="skill">
            <CardContent>
              <h3>Languages</h3>
                <div className="skills-card-content-row">
                  <Typography>Javascript</Typography>
                  <Typography>HTML</Typography>
                  <Typography>CSS</Typography>
                  <Typography>C#</Typography>
                  <Typography>Python</Typography>
                </div>
            </CardContent>
          </Card>
        </div>
        <div className="skill-div">
        <Card className="skill">
          <CardContent>
            <h3>Other Technologies</h3>
            <div className="skills-card-content">
              <div className="skills-card-content-row">
                <Typography>React</Typography>
                <Typography>Sass</Typography>
                <Typography>jQuery</Typography>
                <Typography>Material UI</Typography>
              </div>
              <div className="skills-card-content-row">
                <Typography>Express</Typography>
                <Typography>Node</Typography>
                <Typography>Git</Typography>
                <Typography>Firebase</Typography>
              </div>
              <div className="skills-card-content-row">
                <Typography>GraphQL</Typography>
                <Typography>Apollo</Typography>
                <Typography>MongoDB</Typography>
                <Typography>PostMan</Typography>
              </div>
              <div className="skills-card-content-row">
                <Typography>SQL</Typography>
                <Typography>Entity Framework</Typography>
                <Typography>ASP.NET</Typography>
              </div>

            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
    </Card>
  ) 
}

export default Skills
