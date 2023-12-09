import React from 'react'
import ReactDOM from 'react-dom/client'

import { Index } from './Component/Routes/AllRoutes.tsx'
import './index.css'
import {RouterProvider} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Index} />
   
  </React.StrictMode>,
)
