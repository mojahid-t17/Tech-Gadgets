const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
       <footer className="footertext-base-content justify-center flex border-base-300  px-10 py-4">
        <div className="grid-flow-col items-center">
         
          <h2 className="text-center">
            <p className="text-3xl text-[#09080F] font-bold">Gadget Heaven</p>
            <br />
           <p className="text-sm text-[#09080F99] ">Leading the way in cutting-edge technology and innovation</p>
          </h2>
        </div>
       
        
      </footer>
      <hr className="text-red-400" />
      <footer className="footer text-base-content p-10 flex justify-center md:space-x-48 space-x-12 ">
        <nav className="font-bold">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="font-bold">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="font-bold">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
     
    </div>
  );
};

export default Footer;
