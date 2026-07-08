import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import erp1 from "../assets/erp 1.jpg";
import erp2 from "../assets/erp 2.jpg";
import erp3 from "../assets/erp 3.png";
import erp4 from "../assets/erp 4.jpg";
function Navbar() {
  const images = [erp1, erp2, erp3, erp4];
  const [curImages, setImages] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col w-full h-screen">
      <div className="w-full h-auto bg-white p-2 border-b border-red-800">
        <img
          src="https://www.invertisuniversity.ac.in/public/frontend/assets/images/logo.png"
          className="w-37 h-17 object-cover"
        ></img>
      </div>
      <div
        className=" flex flex-1 w-full h-auto justify-center items-center bg-cover hidden lg:block"
        style={{ backgroundImage: `url(${images[curImages]})` }}
      >
        <SignIn></SignIn>
      </div>
      <div className=" flex flex-1 w-full h-auto justify-center items-center bg-cover bg-gradient-to-r from-red-500 to-blue-600 lg:hidden">
        <SignIn></SignIn>
      </div>
      <div className="w-full h-auto bg-black text-white p-4 text-center">
        <footer>
          ©2021 Invertis University, Invertis Village, Bareilly-Lucknow National
          Highway, NH-24, Bareilly-243123, Uttar Pradesh.
        </footer>
      </div>
    </div>
  );
}
export default Navbar;
