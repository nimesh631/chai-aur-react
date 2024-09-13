// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


// after tree is created ,then variable are injected

const anotherUser=" kayastha"
const reactElement = React.createElement(
  'a' ,
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser    // if{ } cannot be use as end of the day it is converted or is an object
)


createRoot(document.getElementById('root')).render(
 //StrictMode is not necessary 
//  ---this is for fxn1 that is imported from App.jsx
  // <StrictMode>
  //   { 
  //     <App />   
  //   }

  // </StrictMode>,

  
  // ----this is for customReact fxn
    // <MyApp />


    //----this for custom object i.e anotherElement
    // anotherElement

    //custom react cannot be parsed as it key value name is not same as the react's one and also not same syntax 

    reactElement
)

