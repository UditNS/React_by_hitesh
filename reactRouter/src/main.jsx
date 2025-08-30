import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitInfoLoader } from './components/Github/Github.jsx'
// As we have installed react-router so we don't need to render App.jsx instead we modify the main.jsx for the app
// Steps
// 1. import RouterProvider

//createBrowserRouter -> function which takes argument as array of objects
// Method -1 of writing routes
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//         path : '',
//         element : <Home />
//       },
//       {
//         path : 'about',
//         element : <AboutUs />
//       },
//       {
//         path : '/contact',
//         element : <Contact />
//       }
//     ]
//   }
// ])

// Method - 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route path = '' element = {<Home />}></Route>
      <Route path = '/about' element = {<AboutUs />}></Route>
      <Route path = '/contact' element = {<Contact />}></Route>
      <Route path = 'user/:uditId' element = {<User />}></Route>
      <Route loader={gitInfoLoader} path = '/github' element = {<Github />}></Route>
      {/* there is a method in Route which is loader() which fetches the page when we hover over the link and keep the data in cache. Even before the useEffect()  */}
      
      {/* How to use loader -> 
      step - 1 : create a function (using async and await) on github file which just fetches api and return response.json
      step - 2 : in Route write loader = {functionName}
      step - 3 : To get the response from the api on the Github component we need to use a hook which gives data of api. As we return the response we can't get the data from api
      we use const data = useLoaderData();
      */}
    </Route>
  )  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
