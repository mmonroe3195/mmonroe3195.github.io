import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="flex justify-between items-center h-full">
          <Link href="/about">
            <div>about</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
