

import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {


  return (
    <>
   
     
       <div className='mx-auto'>
       <Header></Header>
      
       <Outlet></Outlet>
       
       </div>
       <div className="bg-base-200  ">
       <Footer ></Footer>
       </div>
   

    </>
  )
}

export default App
