import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center	justify-between py-5">
        <h1 className="text-3xl">
          <Link href="/">Nukta Solutions</Link>
        </h1>
        <ul>
          <li>
            <Link href="/" className="bg-secondary p-2 rounded-lg">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
