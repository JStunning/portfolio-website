import { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavbarMenu from './NavbarMenu';
import CatFact from './CatFact'

const Navbar = () => {
  const [catFactActive, setCatFactActive] = useState(false);

  const isCatFactActive = (data) => {
    setCatFactActive(data)
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <NavbarMenu CatFactActivity={isCatFactActive}/>
          <Typography variant="h6" color="inherit">
            Stunning
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <CatFact props={catFactActive}/>
      </div>
    </div>
  )
}

export default Navbar