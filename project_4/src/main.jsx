import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Github from './Component/Github/Github.jsx'

const router =createBrowserRouter([{
 
    path :"/",
    element : <Layout/>,
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"github",
        element:<Github/>
      }
    ]
  }
]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
