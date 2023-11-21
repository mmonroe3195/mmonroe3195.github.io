'use client';
import React from "react";
import Link from "next/link";
import Dropdown from "../../dropdown";


export interface MenuItem {
  title: string | undefined;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Documentation",
    route: "/",
    children: [
      {
        title: "Overview",
        route: "/documentation/overview",
      },
      {
        title: "Power BI Licenses",
        route: "/documentation/power-bi-licenses",
      },
      {
        title: "Set Up",
        route: "/documentation/set-up",
      },
    ],
  },
];

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-green-950 sticky top-0">
        <div className="flex items-center h-full text-yellow-500">
          <Link className="ml-10" href="https://www.cocvac.org/">
            <img src="logo.png" width={50} height={50} alt="COCVAC logo" />
          </Link>
          <Link className="ml-12 hover:text-blue-400" href="/">
            Home
          </Link>
          <Link className="ml-12 hover:text-blue-400" href="/about">
            About
          </Link>
          <Link className="ml-12 hover:text-blue-400" href="/report">
            Reports
          </Link>
          <div className="ml-12">
          {
          menuItems.map((i) => 
            <Dropdown item={i} />
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
