import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-green-950 sticky top-0">
        <div className="flex items-center h-full">
          <Link className="ml-10" href="https://www.cocvac.org/">
            <img src="logo.png" width={50} height={50} alt="COCVAC logo" />
          </Link>
          <Link className="ml-12" href="/">
            Home
          </Link>
          <Link className="ml-12" href="/about">
            About
          </Link>
          <Link className="ml-12" href="/report">
            Reports
          </Link>
          <Link className="ml-12" href="/documentation">
            Documentation
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
