import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";
import React from "react";
import { DeviceTvOld, Movie } from "tabler-icons-react";
import HeaderOption from "./HeaderOption";

const Sidebar = ({ sidebarShow }: { sidebarShow: boolean }) => {
  return (
    <div
      className={`absolute top-[69px] bg-gray-900 bg-opacity-95 w-[300px] ${
        sidebarShow ? "left-0" : "left-[-100%]"
      } min-h-[100vh] transition-all duration-200 block lg:hidden`}
    >
      <div className="w-[100%] flex justify-start items-start gap-4 flex-col pt-5">
        <HeaderOption title="home" Icon={HomeIcon} />
        <HeaderOption title="Search" Icon={SearchIcon} />
        <HeaderOption title="Watchlist" Icon={PlusIcon} />
        <HeaderOption title="Originals" Icon={StarIcon} />
        <HeaderOption title="Movies" Icon={Movie} />
        <HeaderOption title="Series" Icon={DeviceTvOld} />
      </div>
    </div>
  );
};

export default Sidebar;
