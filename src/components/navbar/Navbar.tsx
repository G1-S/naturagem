import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-white fixed top-0 left-0 right-0 z-10">
        <ul className="flex space-x-4 p-4">
          <li className="text-black hover:text-blue-500 cursor-pointer">serviço</li>
          <li className="text-black hover:text-blue-500 cursor-pointer">sobre nós</li>
          <li className="text-black hover:text-blue-500 cursor-pointer">contato</li>
          <li className="text-black hover:text-blue-500 cursor-pointer">create account</li>
          <li className="text-black hover:text-blue-500 cursor-pointer">log in</li>
        </ul>
      </div>
      <div classname= "bg-green-400">
        <button className="text-purple-500 hover:text-yellow-400 cursor-pointer">claymore matador de galinha</button>
      </div>
    </>
  );
}

export default Navbar;
