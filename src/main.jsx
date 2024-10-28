import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx'
import NotFind from './Pages/NotFind.jsx'

const router = createBrowserRouter([
    {
        path:'',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'about',
                element:<About/>,
            },
            {
                path:'project',
                element:<Project/>,
            },
            {
                path:'contact',
                element:<Contact/>,
            },
            {
                path:'*',
                element:<NotFind/>
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
)
