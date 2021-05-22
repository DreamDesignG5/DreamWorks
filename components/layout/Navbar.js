import { useState } from "react";
import { dcdP } from "../../dcd";
import Footer from "./Footer";

export default function Navbar({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div
        className={`transition-all px-10  lg:px-40 fixed z-20 top-0 right-0 bottom-0 left-0 duration-300 ease-in-out bg-gray-100 ${
          showMenu ? "max-h-full" : "max-h-0"
        } overflow-hidden`}
      >
        <div className={"py-5 flex justify-between items-center"}>
          <spa>Menu</spa>
          <div className={"flex flex-row"}>
            <div></div>
            <div
              onClick={handleMenu}
              className={
                "h-10 w-10 rounded-full flex flex-col  items-center  justify-center"
              }
            >
              <div
                className={
                  " flex flex-col  relative items-center  justify-center"
                }
              >
                <div
                  className={
                    "w-4 h-0.5 absolute  bg-gray-700 transform rotate-45"
                  }
                ></div>

                <div
                  className={
                    "w-4 h-0.5 absolute bg-gray-700 transform -rotate-45"
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "z-10  lg:px-40 px-10 py-5 fixed w-full  flex flex-col justify-between  space-y-2 "
        }
      >
        <div className={"flex flex-row justify-between items-center w-full "}>
          <div className={"text-white text-2xl  font-poppin"}>
            {dcdP.nav.company_name}
          </div>
          <div className={"flex flex-row"}>
            <div></div>
            <div
              onClick={handleMenu}
              className={
                "h-10 w-10 bg-gray-50 opacity-80 rounded-full flex  items-center  justify-center"
              }
            >
              <div
                className={" flex flex-col space-y-1 items-end  justify-center"}
              >
                <div className={"w-4 h-0.5 bg-gray-700"}></div>
                <div className={"w-3.5 h-0.5 bg-gray-700"}></div>
                <div className={"w-4 h-0.5 bg-gray-700"}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"absolute w-full "}>
        {children}
        <div>
          <div className={"bg-gray-800  px-10 py-10 lg:px-40 text-gray-100"}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
