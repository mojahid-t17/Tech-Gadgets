import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Cart from './Components/AddToCart/Cart';
import Dashboard from './Components/Dashboard/Dashboard';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Wishlist from './Components/Wishlist/Wishlist';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        index: true,
        element:<Home></Home>,
        
      },
      {
        path: '/statistics',
        loader:()=>fetch('/gadgets.json'),
        element:<Statistics></Statistics>
      },
      {
        path: '/gadget/:product_id',
        element:<GadgetDetails></GadgetDetails>,
        loader:()=>fetch('/gadgets.json')
      },
      {
        path:'/dashboard',
        loader:()=>fetch('/gadgets.json'),
        element:<Dashboard></Dashboard>,
      
        children:[
          {
              index:true,
              element:<Cart></Cart>
          },
          {
            path:'addToCart',
            element:<Cart></Cart>
          
          },
          {
            path:'wishlist',
            element:<Wishlist></Wishlist>
          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
