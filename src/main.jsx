import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  Router,
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Routes';
import AuthProvider from './Provider/AuthProvider';
import {  HelmetProvider } from "react-helmet-async";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <AuthProvider> <RouterProvider router={router} /></AuthProvider>
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
