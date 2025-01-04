
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import BlogPost1 from './Pages/BlogPost1'
import BlogPost2 from './Pages/BlogPost2'
import BlogPost3 from './Pages/BlogPost3'
import BlogPost4 from './Pages/BlogPost4'



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },

  {
    path: '/blog-post1',
    element: <BlogPost1 />
  },

  {
    path: '/blog-post2',
    element: <BlogPost2 />
  },

  {
    path: '/blog-post3',
    element: <BlogPost3 />
  },

  {
    path: '/blog-post4',
    element: <BlogPost4 />
  },

  // {
  //   path: '/login',
  //   element: <LoginPage />
  // },

  // {
  //   path: '/signup',
  //   element: <RegisterPage />
  // },

])

function App() {


  return (
    <>

      <RouterProvider router={appRouter} />


    </>
  )
}

export default App
