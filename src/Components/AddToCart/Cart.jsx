import { useContext, useEffect, useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { TbArrowsTransferUp } from "react-icons/tb";
import { getCartsFromLocalStorage, removeCart } from "../../Utilities/localstorage";
import { LevelContext } from "../Dashboard/Dashboard";


 


const Cart = () => {
  const { gadgetsfiltered } = useContext(LevelContext);

// console.log(gadgetsfiltered)
  // Use state for stored cart items
  const [storedCart, setStoredCart] = useState(() => getCartsFromLocalStorage());
  const [displayCart, setDisplayCart] = useState([]);
  const [totalPrice,setTotalPrice]=useState(0)
  // Filter gadgets based on the stored cart
  useEffect(() => {
    const filtered = gadgetsfiltered.filter(gadget =>
      storedCart.includes(gadget.product_id)
    );
    setDisplayCart(filtered);
    
  // Calculate total price
  const priceSum = filtered.reduce((sum, gadget) => sum + gadget.price, 0);
  setTotalPrice(priceSum);
    
  }, [storedCart, gadgetsfiltered]);

  // Listen to localStorage updates
  useEffect(() => {
    const handleStorageUpdate = () => {
      setStoredCart(getCartsFromLocalStorage());
    };

    window.addEventListener("storage", handleStorageUpdate);
    return () => window.removeEventListener("storage", handleStorageUpdate);
  }, []);


 // Sort cart items in descending order
 const sortByPriceDescending = () => {
  const sorted = [...displayCart].sort((a, b) => b.price - a.price);
  setDisplayCart(sorted);
};
  
 

//  console.log(totalPrice)
  // console.log(price)
  return (
    <div className="max-w-5xl mx-auto my-6">
      <div className="flex flex-col  p-6 space-y-4 sm:p-10 bg-slate-200 bg-opacity-50 ">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold text-emerald-600">Your Cart</h2>
          <div className="space-y-1 text-right">
            <p>
              Total amount:
              <span className="font-semibold">{totalPrice}$</span>
            </p>
            <p className="text-sm text-gray-400">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="flex justify-end space-x-4 text-green-700 hover:text-emerald-500">
          <button
              type="button"
              onClick={sortByPriceDescending}
              className="px-6 py-2 border rounded-md border-emerald-400 flex items-center"
            >
              <span className="mr-2">Sort by price</span>
              <span className="sr-only sm:not-sr-only">
                <TbArrowsTransferUp />
              </span>
            </button>
            <button
              type="button"
              className="px-6 py-2 border rounded-md bg-emerald-500 text-white hover:text-black border-emerald-400"
            >
              <span className="sr-only sm:not-sr-only">Purchase</span>
            </button>
          </div>
        </div>
        <ul className="flex flex-col divide-y divide-gray-700">
          {
            displayCart.map((cart,idx)=>
                <li key={idx} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4 p-4">
               <div className=" w-20 h-20 dark:border- rounded outline-none sm:w-48 sm:h-32 bg-gray-500">
               <img
                className="flex-shrink-0 object-cover w-full h-full"
                src={cart.product_image}
                alt="Polaroid camera"
              />
               </div>
              <div className="flex flex-col justify-between w-full pb-4 ">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1 ms-3">
                    <h3 className="text-2xl font-semibold leading-snug sm:pr-8">
                      {cart.product_title}
                    </h3>
                    <p className="text-base text-gray-400">{cart.description}</p>
                  </div>
                  <div className="text-right">
                    <button
                         onClick={() => {
                          removeCart(cart.product_id);
                          setStoredCart(getCartsFromLocalStorage()); // Update stored cart after removing
                        }}
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1 text-red-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span className="">Remove</span>
                    </button>
                  </div>
                </div>
                <div className="flex text-sm divide-x text-green-600">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 space-x-1"
                  >
                    <span className="text-2xl">
                      <AiOutlineDollar />
                    </span>
                    <span>
                      <p className="text-lg font-semibold"> Price :{cart.price}$</p>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </li>
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default Cart;
