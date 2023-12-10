import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import { Toaster } from 'react-hot-toast';
import AdminProvider from './provider/AdminProvider.jsx'
// check git branch

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-[1400px] mx-auto">
    <React.StrictMode>
      <AdminProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AdminProvider>
    </React.StrictMode>
    ,
    <Toaster />
  </div>
);
