import { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavbarMenu from './NavbarMenu';
import Calculator from './Calculator';
import CatFact from './CatFact';
import Clock from './Clock';

const Navbar = () => {
  const [catFactVisible, setCatFactVisible] = useState(false);
  const [clockVisible, setClockVisible] = useState(false);
  const [calculatorVisible, setCalculatorVisible] = useState(false);

  // Calculator
  const isCalculatorVisible = (data) => {
    setCalculatorVisible(data);
  }

  // Cat fact
  const isCatFactVisible = (data) => {
    setCatFactVisible(data);
  }

  // Clock
  const isClockVisible = (data) => {
    setClockVisible(data);
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense" className="Toolbar">
          <NavbarMenu calculatorVisibility={isCalculatorVisible} catFactVisibility={isCatFactVisible} clockVisibility={isClockVisible}/>
          <Typography variant="h6" color="inherit">
            Stunning
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Calculator props={calculatorVisible} setClose={isCalculatorVisible}/>
        <CatFact props={catFactVisible} setClose={isCatFactVisible}/>
        <Clock props={clockVisible} setClose={isClockVisible}/>
      </div>
    </div>
  )
}

export default Navbar