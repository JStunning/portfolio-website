import { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavbarMenu from './NavbarMenu';
import Calculator from './Calculator';
import CatFact from './CatFact';
import Clock from './Clock';
import MotivationalQuote from './MotivationalQuote';

const Navbar = () => {
  const [calculatorVisible, setCalculatorVisible] = useState(false);
  const [catFactVisible, setCatFactVisible] = useState(false);
  const [clockVisible, setClockVisible] = useState(false);
  const [motivationalQuoteVisible, setMotivationalQuoteVisible] = useState(false);

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

  // Motivational Quote
  const isMotivationalQuoteVisible = (data) => {
    setMotivationalQuoteVisible(data)
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense" className="Toolbar">
          <NavbarMenu 
            calculatorVisibility={isCalculatorVisible} 
            catFactVisibility={isCatFactVisible} 
            clockVisibility={isClockVisible}
            motivationalQuoteVisibility={isMotivationalQuoteVisible}
          />
          <Typography variant="h6" color="inherit">
            <a href="/portfolio-website" className="home-logo"> Stunning </a>
          </Typography>
        </Toolbar>
      </AppBar>
      <>
        <Calculator props={calculatorVisible} setClose={isCalculatorVisible}/>
        <CatFact props={catFactVisible} setClose={isCatFactVisible}/>
        <Clock props={clockVisible} setClose={isClockVisible}/>
        <MotivationalQuote props={motivationalQuoteVisible} setClose={isMotivationalQuoteVisible} />
      </>
    </>
  )
}

export default Navbar