import React, { ReactElement } from "react";
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
  return (
    <div className="relative w-[100vw] min-h-[100vh] text-white">
      <Header />
      <Sidebar />
      <div className="w-[100%] min-h-[100vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
