import React, { ReactElement, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const PageLayout = ({
  user,
  children,
}: {
  user?: string;
  children: ReactElement;
}) => {
  const [sidebarShow, setSidebarShow] = useState(false);

  return (
    <div className="relative w-[100vw] min-h-[100vh] text-white">
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      <Sidebar sidebarShow={sidebarShow} />
      <div className="w-[100%] min-h-[100vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
