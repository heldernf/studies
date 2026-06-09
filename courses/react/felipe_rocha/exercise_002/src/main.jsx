import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import TaskPage from './pages/TaskPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/home' replace />
  },
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/task',
    element: <TaskPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
