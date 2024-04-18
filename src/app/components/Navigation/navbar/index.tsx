"use client";
import React from "react";
import Link from "next/link";
import Dropdown from "../../dropdown";

export interface MenuItem {
  title: string | undefined;
  route?: string;
  children?: MenuItem[];
}

const documentationMenuItems: MenuItem[] = [
  {
    title: "Documentation ▼",
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
    ],
  },
];
const aboutMenuItems: MenuItem[] = [
  {
    title: "About ▼",
    route: "/",
    children: [
      {
        title: "Developers",
        route: "/about/developers",
      },
      { title: "Project", route: "/about/project" },
    ],
  },
];

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-green-950 sticky top-0">
        <div className="flex items-center h-full text-yellow-500">
          
          <Link className="ml-12 hover:text-yellow-200" href="/">
            Home
          </Link>
          <div className="ml-12">
            {aboutMenuItems.map((i) => (
              <Dropdown key={i.title} item={i} />
            ))}
          </div>
          <Link className="ml-12 hover:text-yellow-200" href="/report">
            Reports
          </Link>
          <div className="ml-12">
            {documentationMenuItems.map((i) => (
              <Dropdown key={i.title} item={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
