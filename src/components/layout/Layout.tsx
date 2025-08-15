"use client";
import React, { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import SecondaryNavbar from "./SecondaryNavbar";
import CalendarDrawer from "../shared/Calendar";

const Layout = ({ children }: { children: ReactNode }) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openBudget, setOpenBudget] = useState(false);
  return (
    <main className="w-screen h-dvh pt-28 md:pt-36">
      <Navbar
        setOpenCalendar={setOpenCalendar}
        setOpenBudgeting={setOpenBudget}
      />
      <SecondaryNavbar />
      <CalendarDrawer open={openCalendar} setIsOpen={setOpenCalendar} />
      <div className="pb-5"> {children}</div>
    </main>
  );
};

export default Layout;
