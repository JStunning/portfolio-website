import './App.css';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons/Menu'; 


function App() {
  return (
    <div className="App">
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="black" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
      <header className="App-header">
        <Button variant="contained">Default</Button>
      </header>
    </div>
  );
}

export default App;
