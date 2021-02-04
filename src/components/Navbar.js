import { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavbarMenu from './NavbarMenu';
import CatFact from './CatFact'

const Navbar = () => {
  const [catFactActive, setCatFactActive] = useState(false);

  // NavMenu
  const isCatFactActive = (data) => {
    setCatFactActive(data)
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense" className="Toolbar">
          <NavbarMenu CatFactActivity={isCatFactActive} closeCat={catFactActive}/>
          <Typography variant="h6" color="inherit">
            Stunning
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <CatFact props={catFactActive} setClose={isCatFactActive}/>
      </div>
    </div>
  )
}

export default Navbar