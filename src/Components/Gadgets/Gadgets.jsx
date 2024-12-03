import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Gadget from "./Gadget";

const Gadgets = () => {
  const [gadgets,setGadgets]=useState([]);
  const [categories, setCategories] = useState([]);
  const [displayGadget,setDisplayGadget]=useState(gadgets);
  useEffect(()=>{
    fetch('gadgets.json')
    .then(res=>res.json())
    .then(data=>setGadgets(data));
  },[])
  useEffect(() => {
    const newCategories = [];

    gadgets.forEach((gadget) => {
      if (!newCategories.includes(gadget.category)) {
        newCategories.push(gadget.category);
      }
    });
    setCategories(newCategories);
  }, [gadgets]);
  // console.log(categories);
  // handle display gadgets by category
  
  useEffect(()=>{
    setDisplayGadget(gadgets)
  },[gadgets])
  const handleDisplayGadget=(category)=>{
    console.log(category)
    // console.log(displayGadget)
      // const clicked=category;
      // console.log(clicked)
      if(category=="All"){
        setDisplayGadget(gadgets)
      }
      else{
        const filtered =gadgets.filter(gadget=>gadget.category==category.category);
        //  console.log(filtered)
       setDisplayGadget(filtered)
      }
      
  }
  return (
    <div className="my-11 ">
      <div>
        <h1 className="text-5xl my-5 font-bold text-center ">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      {/* BUTTON  to display all gadgets  */}
      <div className="xl:ms-52 md:mx-8 ms-2">
        
        <NavLink 
         
         onClick={()=>handleDisplayGadget('All')}
        className="border border-green-800 border-1 px-8 m-2 py-2 text-black text-sm font-bold hover:bg-green-700 hover:scale-105 rounded-xl">
          All
        </NavLink>
      </div>
      {/* button to display only selceted category */}
      <div className="grid md:grid-cols-5 grid-cols-4 xl:mx-52 md:mx-8 m-2">
        {categories.map((category, idx) => (
          <button
            onClick={()=>handleDisplayGadget({category})}
            key={idx}
            className="border border-green-800 border-1 px-2 m-2 py-3 text-black text-sm font-bold hover:bg-green-700 hover:scale-105 rounded-xl"
          >
            {category}
          </button>
        ))}
      </div>
      {/*  display all the gadgets cards */}
      <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-0   max-w-screen-xl mx-auto pb-11">
        {displayGadget.map((gadget) => (
          <Gadget
            key={gadget.id}
            gadget={gadget}
            categories={categories}
          ></Gadget>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
