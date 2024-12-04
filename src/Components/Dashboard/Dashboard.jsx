import { createContext } from "react";
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getCartsFromLocalStorage, getWishLIst } from "../../Utilities/localstorage";
// eslint-disable-next-line react-refresh/only-export-components
export  const LevelContext=createContext()
const Dashboard = () => {
  
      const cartItem= getCartsFromLocalStorage();
      const wishlist=getWishLIst();
   const products=useLoaderData()
   
   const gadgetsfiltered=products.filter(product=>cartItem.includes(product.product_id));
//    console.log(gadgetsfiltered)
//    console.log(products)
//    console.log(cartItem)
  const filteredWishList=products.filter(product=>wishlist.includes(product.product_id));
//   console.log(filteredWishList)
    return (
        <div  className="mt-28 md:max-w-5xl mx-auto ">
          <Helmet>
            <title>
              Gadgets|Dashboard
            </title>
          </Helmet>
            <h1 className="text-5xl text-emerald-500 text-center font-bold">
            Dashboard
      </h1>
      <p className="text-center my-3 text-xl">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="flex justify-center items-center space-x-3 my-8">
         <NavLink to={"addToCart"} className={({isActive})=>isActive?"btn btn-success font-bold ":"btn btn-success font-bold  btn-outline "}>Cart</NavLink>
         <NavLink to={'wishlist'}  className={({isActive})=>isActive?"btn btn-success font-bold ":"btn btn-success font-bold  btn-outline "}>Wishlist</NavLink>
         
      </div>
           <div>
              <LevelContext.Provider value={{gadgetsfiltered,filteredWishList}}>
              <Outlet></Outlet>
              </LevelContext.Provider>
           
            </div> 
        </div>
    );
};

export default Dashboard;