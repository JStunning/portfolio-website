import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: "white",
  },
}));

const NavbarMenu = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="burger-menu">
      <IconButton edge="start" aria-label="menu" onClick={handleClick}>
        <MenuIcon className={classes.menuButton} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem><a href="#Skills" className="burger-link">Skills</a></MenuItem>
        <MenuItem><a href="#Jobs" className="burger-link">Jobs</a></MenuItem>
        <MenuItem><a href="#Projects" className="burger-link">Projects</a></MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarMenu