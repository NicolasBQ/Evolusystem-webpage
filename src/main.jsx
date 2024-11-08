import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { Computers } from './Computers.jsx';
import { Printers } from './Printers.jsx';
import { Camaras } from './Camaras.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'computadores',
    element: <Computers />
  },
  {
    path: 'impresoras',
    element: <Printers />
  },
  {
    path: 'camaras',
    element: <Camaras />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
