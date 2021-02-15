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

  const alertMessage = () => {
    alert("This is broken on mobile, cannot close opened tools.");
  }

  return (
    <div className="burger-menu">
      <IconButton edge="start" aria-label="menu" onClick={handleClick}>
        <MenuIcon className={classes.menuButton} onClick={alertMessage} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {props.calculatorVisibility(true); handleClose()}}>Calculator</MenuItem>
        <MenuItem onClick={() => {props.catFactVisibility(true); handleClose()}}>Cat Fact</MenuItem>
        <MenuItem onClick={() => {props.clockVisibility(true); handleClose()}}>Clock</MenuItem>
        <MenuItem onClick={() => {props.motivationalQuoteVisibility(true); handleClose()}}>Motivational Quote</MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarMenu