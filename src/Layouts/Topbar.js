import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => {

  return (
    <>

      <header className= "z-10 fixed top-0 left-64 right-0 bg-gray-900 text-white py-6 ">
        <div className="container mx-auto flex justify-between ">
          <Link>
            <h1
              className="hidden">
              <GiHamburgerMenu className="mt-1" />
            </h1>
          </Link>
          <h3 className="font-bold font-logo text-xl ">
            <FaBus className="inline-block" /> SisipBis
          </h3>
          <h3 className="text-xl mr-4">
           <img
              src='#'             
              width="35px"
              className="inline-block mr-2 rounded-full"
            />
              <p className="inline-block">Nama User</p>
           
            <Link >
              
                <IoIosArrowDropdown className="inline-block hover:bg-gray-800" />
              
            </Link>
          </h3>
        </div>
      </header>
    </>
  );
};

export default Topbar;
