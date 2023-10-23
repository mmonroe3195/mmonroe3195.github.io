import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-green-950 sticky top-0">
        <div className="flex justify-between items-center h-full">
          <Link href="https://www.cocvac.org/">
            <img src="logo.png" width={50} height={50} />
          </Link>
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
