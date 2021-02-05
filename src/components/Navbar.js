import { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavbarMenu from './NavbarMenu';
import CatFact from './CatFact';
import Clock from './Clock';

const Navbar = () => {
  const [catFactActive, setCatFactActive] = useState(false);
  const [clockShown, setClockShown] = useState(false);

  // Cat fact
  const isCatFactActive = (data) => {
    setCatFactActive(data)
  }

  // Clock
  const isClockActive = (data) => {
    setClockShown(data)
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense" className="Toolbar">
          <NavbarMenu CatFactActivity={isCatFactActive} closeCat={catFactActive} clockActivity={isClockActive}/>
          <Typography variant="h6" color="inherit">
            Stunning
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <CatFact props={catFactActive} setClose={isCatFactActive}/>
        <Clock props={clockShown} setClose={isClockActive}/>
      </div>
    </div>
  )
}

export default Navbar