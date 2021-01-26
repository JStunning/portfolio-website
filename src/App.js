import './App.css';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons/Menu'; 
import Skills from './components/Skills'


function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          {/* <IconButton color="black" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <header className="App-header">
        <Button variant="contained">Default</Button>
      </header>
      <Skills />
    </div>
  );
}

export default App;
