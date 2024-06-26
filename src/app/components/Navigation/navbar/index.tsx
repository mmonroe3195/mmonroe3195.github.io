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
    title: "Learn More ▼",
    route: "/",
    children: [
      {
        title: "Address Climate Change",
        route: "/get-involved",
      },
      {
        title: "Sources",
        route: "/sources",
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
      { title: "Local Farms", route: "/locations/location-3" },
      { title: "Erie Canal", route: "/locations/location-4" },
      { title: "Oriskany Creek", route: "/locations/location-5" },
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
          <Link className="ml-12 hover:text-text-gray-50" href="/locations/location-2">
            Overview
          </Link>
          <Link className="ml-12 hover:text-text-gray-50" href="/locations/location-3">
          Local Farms
          </Link>
          <Link className="ml-12 hover:text-text-gray-50" href="/locations/location-4">
          Erie Canal
          </Link>
          <Link className="ml-12 hover:text-text-gray-50" href="/locations/location-5">
          Oriskany Creek
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
