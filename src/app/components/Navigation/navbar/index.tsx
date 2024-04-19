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
    title: "Locations ▼",
    route: "/",
    children: [
      { title: "Lake Oneida", route: "/locations/location-1",},
      { title: "Hamilton College", route: "/locations/location-2" },
      { title: "location-3", route: "/locations/location-3" },
      { title: "location-4", route: "/locations/location-4" },
      { title: "location-5", route: "/locations/location-5" },
    ],
  },
];

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-blue-950 sticky top-0">
        <div className="flex items-center h-full text-gray-50	">
          
          <Link className="ml-12 hover:text-gray-50	" href="/">
            Home
          </Link>
          <div className="ml-12">
            {aboutMenuItems.map((i) => (
              <Dropdown key={i.title} item={i} />
            ))}
          </div>
          <Link className="ml-12 hover:text-text-gray-50" href="/get-involved">
            Address Climate Change
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
