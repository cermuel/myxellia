import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import SecondaryNavbar from "./SecondaryNavbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-screen h-dvh pt-28 md:pt-36">
      <Navbar />
      <SecondaryNavbar />
      {children}
    </main>
  );
};

export default Layout;
