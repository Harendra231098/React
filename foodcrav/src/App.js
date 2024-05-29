import React,{ lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestuarantMenu from './components/RestuarantMenu';
import Shimmer from './components/Shimmer';
//import Grocery from './components/Grocery';

//chunking
//code splitting
//lazy loading
//dynamic import
//ondemand loading
//dynamic bundling

const Grocery = lazy(() => import('./components/Grocery'));


const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
    {/* if path= / 
    <Body />
     if path= /about
    <About />
    if path= /contact 
    <Contact /> */}
  </div>
);

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