import React from 'react'
import { Navbar_Component } from './component/Navbar_Component'
import { Silider_Component } from './component/Silider_Component'
import "./App.css"
import { First_Component } from './component/First_Compomemt'
import { Second_Component } from './component/Second_Component'
import {Card_rander_Component} from './component/Card_rander_Component'
import Main_Card_Rander_Component from './component/Main_Card_Rander_Component'
import { Last_Component } from './component/Last_Component'
import Footer_Component from './component/Footer_Component'


const App = () => {
  return (
    <div>
      <Navbar_Component/>
      <Silider_Component/>
      <First_Component/>
      <Second_Component/>
      <Card_rander_Component/>    
      <Main_Card_Rander_Component/>
      <Last_Component/>
      <Footer_Component/>
    </div>
  )
}

export default App
