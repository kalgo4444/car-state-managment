import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import AddInformation from './pages/AddInformation'
import NotFound from './pages/NotFound'
import UpdateInfo from './pages/UpdateInfo'

const App = () => {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/info',
          element: <AddInformation />,
        },
        {
          path: '/update/:id',
          element: <UpdateInfo />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])
}

export default React.memo(App)
