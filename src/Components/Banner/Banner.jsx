

const Banner = () => {
    return (
        <div className="px-6">
            
        <div className=" text-gray-100 mt-20 pt-2">
          <div className="flex flex-col  mx-auto overflow-hidden rounded-b">
            <div className="w-full md:h-[480px] h-72 bg-emerald-700 rounded-b-xl ">
                  <div className="text-center mt-3 py-6 ">
                    <h1 className="md:text-6xl text-3xl max-w-6xl mx-auto font-bold">Upgrade Your Tech Accessorize with <br />Gadget Heaven Accessories</h1>
                    <p className="my-5 max-w-3xl mx-auto  text-xl">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                     <div className="">
                     <button className="btn text-green-800 text-xl font-bold bg-white">Shop Now</button>

                     </div>
                  </div>
              
            </div>
            <div className="p-6  bg-slate-50 bg-opacity-40  mx-auto md:-mt-36 mt-5 space-y-6 lg:max-w-3xl   rounded-3xl ">
             <img className="h-96 w-auto md:w-[900px]" src="/public/images/cameraa.jpg" alt="" />
            </div>
          </div>
        </div>
     
        </div>
    );
};

export default Banner;