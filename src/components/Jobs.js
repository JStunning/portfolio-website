import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const Jobs = () => {
  return (
    <div className="Jobs">
      <h2>Jobs</h2>
      <div className="jobs-cards">
        <div className="job-div">
          <Card className="job">
            <CardContent>
              <h3>Anywhere.com</h3>
              <p>2020</p>
              <h4>Intern Web Developer</h4>
              <Typography>Javascript</Typography>
              <Typography>React</Typography>
              <Typography>GraphQL</Typography>
              <Typography>AgGrid</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="job-div">
          <Card className="job">
            <CardContent>
              <h3>Target</h3>
              <p>2017-2019</p>
              <h4>Tech Consultant</h4>
              <Typography>Sales</Typography>
              <Typography>Costumer Service</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="job-div">
          <Card className="job">
            <CardContent>
              <h3>Kauai Nut Roasters</h3>
              <p>2014-2017</p>
              <h4>Roaster</h4>
              <Typography>Cooking</Typography>
              <Typography>Cleaning</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Jobs