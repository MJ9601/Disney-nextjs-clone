import Image from "next/image";
import React from "react";
import HeaderOption from "./HeaderOption";
import { MenuIcon } from "@heroicons/react/solid";

const Header = () => {
  const user = true;
  return (
    <div className="px-4 shadow-gray-700 shadow py-2 mx-auto flex justify-between items-center">
      <div className="flex gap-9 justify-between items-center">
        <Image src="/images/logo.png" height={50} width={90} />
        <div className="hidden md:flex gap-4 items-center">
          <HeaderOption />
          <HeaderOption />
          <HeaderOption />
        </div>
      </div>
      <div className="flex gap-3 mr-2 md:mr-4 justify-center items-center text-white">
        {!user ? (
          <>
            <button className="text-xl uppercase px-2 py-1 rounded-sm hover:bg-gray-500 cursor-pointer transition-all">
              Login
            </button>
          </>
        ) : (
          <div className="p-2 rounded-full cursor-pointer ring-2 ring-red-600">
            <img
              src="/images/logo.png"
              className="w-[25px] h-[25px] object-contain"
            />
          </div>
        )}

        <MenuIcon className="block md:hidden text-white h-10 cursor-pointer hover:bg-gray-400 rounded-full p-1 transition-all" />
      </div>
    </div>
  );
};

export default Header;
