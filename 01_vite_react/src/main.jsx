import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function Inner(){
    return(
        <div>
               <h1>inner function! running...</h1>
        </div>
     
    )
}
/*
const ReactElement = {
    type:'a',
    props:{
       href: 'http://google.com',
       target: '_blank'
    },
    children: 'click me to visit google !'
}
    */
const otherEle =(
    <a href="http://google.com" target="_blank">Visit Google</a>
)
const another="arpita.."
const reactElement = React.createElement(
    'a',
    {href: 'http://google.com' , target:'_blank'},
    'click me to visit google...',
    another
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
 //  <App />
  //<Inner />
// Inner()
//ReactElement
//otherEle
reactElement
)
