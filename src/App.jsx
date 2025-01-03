
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import BlogPost1 from './Pages/BlogPost1'



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },

  {
    path: '/blog-post1',
    element: <BlogPost1 />
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

      {/* <BrowserRouter>

        <Navbar />

        <Header />

        <Posts />

      </BrowserRouter> */}

    </>
  )
}

export default App
