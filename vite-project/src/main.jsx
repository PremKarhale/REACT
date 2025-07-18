import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const ReactElement = React.createElement(
  'a', //set tag name

  { href: "https://google.com", target: '_blank' }, //set attributes 

  'click on me to visit google '// inner html or children

)


// <strict mode > --> likha to likha nahi to bhi chalta hai 
createRoot(document.getElementById('root')).render(
  <StrictMode>

   <App />
    {ReactElement}  {/* because it is not a component that is why we use {}  */}

  </StrictMode>
)
