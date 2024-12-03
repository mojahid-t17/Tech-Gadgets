import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const getBackgroundColor = () => {
    if (location.pathname == "/") {
      return {
        bgColor: "bg-emerald-700",
        textColor: "text-white",
        roundedTop: "rounded-t-xl",
        marginTop: "mt-0",
      };
    }
    return {
      bgColor: "bg-slate-100",
      textColor: "text-black ",
    };
  };
  const { bgColor, textColor, roundedTop, marginTop } = getBackgroundColor();
  return (
    <div className={`${bgColor} ${roundedTop} ${marginTop} py-3  fixed top-0 left-6 right-6 z-10 `}>
      <div className=" navbar max-w-screen-xl  mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button "
              className={` btn btn-ghost lg:hidden`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink className="font-bold" to={"/"}>
                Home
              </NavLink>
              <NavLink className="font-bold" to={"/statistics"}>
                Statistics
              </NavLink>
              <NavLink className="font-bold" to={"/dashboard"}>
                Dashboard
              </NavLink>
            </ul>
          </div>
          <a className={`btn btn-ghost text-2xl ${textColor} font-bold`}>
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-7">
            <NavLink className={`font-bold ${textColor}`} to={"/"}>
              Home
            </NavLink>
            <NavLink className={({isActive})=>isActive?'text-green-500 font-bold': `font-bold ${textColor}`} to={"/statistics"}>
              Statistics
            </NavLink>
            <NavLink className={({isActive})=>isActive?'text-green-500 font-bold': `font-bold ${textColor}`} to={"/dashboard"}>
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <NavLink to={'dashboard/addToCart'}  className={({isActive})=>isActive?"btn text-xl text-black btn-circle bg-emerald-300": "btn text-xl text-black btn-circle"}>
            <FaShoppingCart />
          </NavLink >
          <NavLink to={'dashboard/wishlist'} className={({isActive})=>isActive? "btn  btn-circle bg-emerald-300":"btn  btn-circle"}>
            <div className=" text-xl font-bold text-black">
              <p>
                <CiHeart />
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
