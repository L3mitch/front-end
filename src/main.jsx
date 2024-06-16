import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Product from './routes/Product.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Login from './routes/Login.jsx'
import Cadastro from './routes/Cadastro.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/products',
        element: <Product />
      },
      {
        path: '/cadastroProd',
        element: <Cadastro />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
