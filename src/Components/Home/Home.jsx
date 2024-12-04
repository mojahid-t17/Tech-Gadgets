import { Helmet } from 'react-helmet-async';
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
const Home = () => {

  return (
    <div className="bg-slate-100">
       <Helmet>
        <title>
         Gadgets| Home
        </title>
       </Helmet>
      <Banner ></Banner>
      <Gadgets></Gadgets>
    </div>
  );
};

export default Home;
