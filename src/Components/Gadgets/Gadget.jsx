/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  // console.log(gadget)
  const { product_title, product_image, price, product_id} = gadget;

  return (
    <Link>
      <div className="card bg-slate-50 border border-slate-200  gap-3 w-96 shadow mt-5 transform transition-transform duration-75 hover:scale-105 relative md:mx-0 mx-auto">
        <figure className="px-5 pt-8 mt-6 max-h-48">
          <img src={product_image} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-xl my-3">Price: {price}</p>
          <div className="card-actions">
            <Link to={`/gadget/${product_id}`}>
              <button  className="btn btn-success btn-outline font-bold ">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Gadget;
