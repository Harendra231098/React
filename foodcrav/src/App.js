import React,{ lazy,Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestuarantMenu from './components/RestuarantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
//import Grocery from './components/Grocery';

//chunking
//code splitting
//lazy loading
//dynamic import
//ondemand loading
//dynamic bundling

const Grocery = lazy(() => import('./components/Grocery'));


const AppLayout = () => {
  const [userName,setUserName] = useState(null);

//authentication
  useEffect(()=>{
   // make an API call send user and password
    const data = {
      name:'Harendra'
    }
    setUserName(data.name);
  },[])
  return(
    //wrapppring in app
    //Anywhere iniside app component
    //Default User
    <UserContext.Provider value ={{loggedInUser : userName,setUserName }}>
  { /*Harendra*/}
    <div className="app">
   { /* <UserContext.Provider value ={{loggedInUser : "Elon" }}> */}
   { /*Elon Musk*/}
    <Header />
   {/* </UserContext.Provider> */}
    <Outlet />
  </div>
  </UserContext.Provider>

  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/restaurant/:resId",
        element:<RestuarantMenu />,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer /> }> <Grocery /> </Suspense>
      },
    ]
  },
 /* {
    path:"/about",
    element:<About />,
  },
  {
    path:"/contact",
    element:<Contact />,
  }*/
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);