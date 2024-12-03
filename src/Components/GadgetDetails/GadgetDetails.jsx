import { CiHeart } from "react-icons/ci";
import { FaCartPlus, FaStar } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCartsFromLocalStorage, getWishLIst, saveCartToLocalstorage, saveWishListToLs } from "../../Utilities/localstorage";
const GadgetDetails = () => {
  const product_id = useParams();
  const products = useLoaderData();
  // console.log(product_id)
  // console.log(products)
 const wishlist=getWishLIst();

 const filteredWishList=wishlist.find(item=>item===product_id.product_id);

//  console.log(filteredWishList)


  const filterer = products.find(
    (product) => product.product_id === product_id.product_id
  );
  // console.log(filterer);
  const storedCart=getCartsFromLocalStorage();
    // console.log(storedCart)

  const hadleAddToCart=(id)=>{
    
  

    const filteredCart=storedCart.find(cart=>cart.includes(id));
    // console.log(filteredCart)
    if(filteredCart){
      // console.log('item already added')
      toast.error("Item already exist to cart!!!!");
    }
    else{
      toast.success("The product Are added to cart!");
      saveCartToLocalstorage(id);
    }
  }
  // fuction to add to cart and show toast
  const handleAddToWishList = (id) => {
    if (filteredWishList) {
      toast.error("Item is already in the wishlist!");
    } else {
      toast.success("Item added to the wishlist!");
      saveWishListToLs(id);
    }
  };

  return (
    <div className="mt-28 md:max-w-5xl mx-auto ">
      <h1 className="text-5xl text-emerald-500 text-center font-bold">
        Product Details
      </h1>
      <p className="text-center my-3 text-xl">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="my-10">
        <div className="card lg:card-side bg-sky-50 bg-opacity-55 shadow-xl h-full">
          <figure className="px-5  w-96  ">
            <img
              className="h-full py-3 rounded-2xl"
              src={filterer.product_image}
              alt="Album"
            />
          </figure>
          <div className="space-y-4 ms-5 mt-5">
            <h2 className="card-title text-4xl">{filterer.product_title}</h2>
            <p className="text-xl font-semibold">Price: ${filterer.price}</p>
            <p className="">
              <button className={`${filterer.availability?'bg-green-50 text-green-600 border-green-600':'bg-red-50 text-red-600 border-red-600'} " px-4 py-1 rounded-xl  font-bold border "`}>
                {filterer.availability ? "In Stock" : "Sold"}
              </button>
            </p>
            <p className="text-[#09080F99] text-xl">{filterer.description}</p>
            <h3 className="font-bold text-2xl">Specification:</h3>
            <ol>
              {filterer.specification.map((sp, idx) => (
                <li className="my-1" key={idx}>
                  {idx + 1}. {sp}
                </li> // Each item is automatically numbered by <ol>
              ))}
            </ol>
             <h4 className="flex items-center space-x-3"><span><FaStar /></span> Rating: {filterer.rating} </h4>

            <div className="card-actions pb-8">
            <button  onClick={( )=>hadleAddToCart(product_id.product_id)} className="btn btn-success btn-outline font-bold ">
                Add to Cart <span><FaCartPlus /></span>
              </button>
              <ToastContainer />
              <button onClick={() => handleAddToWishList(product_id.product_id)}
             className="btn btn-success btn-outline rounded-3xl p-3 text-2xl font-extrabold ms-4"
             disabled={!!filteredWishList} >
              <CiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
