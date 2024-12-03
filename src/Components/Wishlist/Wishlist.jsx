import { useContext, useEffect, useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getCartsFromLocalStorage,
  getWishLIst,
  saveCartToLocalstorage
} from "../../Utilities/localstorage";
import { LevelContext } from "../Dashboard/Dashboard";

const Wishlist = () => {
  const { filteredWishList } = useContext(LevelContext); // Filtered wishlist from context
  // eslint-disable-next-line no-unused-vars
  const [wishlistItems, setWishlistItems] = useState(getWishLIst());
  const storedCart = getCartsFromLocalStorage();

  // Function to remove an item from the wishlist
  const handleRemoveFromWishlist = (id) => {
    const storedWishlist = getWishLIst();
    if (storedWishlist.includes(id)) {
      const updatedWishlist = storedWishlist.filter((item) => item !== id);
      localStorage.setItem("wishList", JSON.stringify(updatedWishlist));
      setWishlistItems(updatedWishlist);
      toast.success("Item removed from wishlist!");
    } else {
      toast.error("Item already delete from wishlist!");
    }
  };

  // Sync wishlist items with localStorage updates
  useEffect(() => {
    const handleStorageUpdate = () => {
      setWishlistItems(getWishLIst());
    };

    window.addEventListener("storage", handleStorageUpdate);
    return () => window.removeEventListener("storage", handleStorageUpdate);
  }, []);

  // Function to add an item to the cart
  const handleAddToCart = (id) => {
    if (storedCart.includes(id)) {
      toast.error("Item already exists in the cart!");
    } else {
      saveCartToLocalstorage(id);
      toast.success("Product added to cart!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-6">
      <div className="flex flex-col p-6 space-y-4 sm:p-10 bg-slate-200 bg-opacity-50">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Wishlist</h2>
        </div>
        <ul className="flex flex-col divide-y divide-gray-700">
          {filteredWishList.map((wishlist, idx) => (
            <li key={idx} className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-48 rounded md:h-full bg-gray-500"
                  src={wishlist.product_image}
                  alt={wishlist.product_title}
                />
                <div className="flex flex-col justify-between w-full pb-4 ps-6">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1 ms-3">
                      <h3 className="text-lg font-semibold">{wishlist.product_title}</h3>
                      <p className="text-sm text-gray-400">{wishlist.description}</p>
                    </div>
                    <div className="text-right">
                      <button
                        type="button"
                        className="flex items-center px-2 py-1  pl-0 text-red-400 space-x-1"
                        onClick={() => handleRemoveFromWishlist(wishlist.product_id)}
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
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 space-y-3" >
                    <div className="flex items-center px-2 py-1 space-x-1">
                      <AiOutlineDollar className="text-2xl" />
                      <p className="text-lg font-semibold">Price: {wishlist.price}$</p>
                    </div>
                    <button
                      onClick={() => handleAddToCart(wishlist.product_id)}
                      className="btn btn-success ms-3 btn-outline font-bold"
                    >
                      Add to Cart <FaCartPlus />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Wishlist;
