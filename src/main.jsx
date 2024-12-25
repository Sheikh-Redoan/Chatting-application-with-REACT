import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css'
import Registrarrion from './pages/Registration/Registrarrion.jsx';


createRoot(document.getElementById('root')).render(<App/>)
