import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IntroComponent from './Component/IntroComponent'
import EventComponent from './Component/EventComponent'
import ConditionalComponent1 from './Component/ConditionalComponent1'
import ConditionalComponent2 from './Component/ConditionalComponent2'

function App() {
let component;
let condition = true;
if (condition) {
  component = <ConditionalComponent1 />
}
else { 
  component = <ConditionalComponent2 />
}

  return (
   <>
   {component}

   <div>
    {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}
   </div>
   </>
  )
}

export default App
