import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {

  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense" className="Toolbar">
          <NavbarMenu />
          <Typography variant="h6" color="inherit">
            <a href="/portfolio-website" className="home-logo"> Stunning </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar