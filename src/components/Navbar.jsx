import React from "react";
import { navitems } from "../constants";
import search from "../assets/search.png"
const Navbar = () => {
  return (
    <nav>
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        <div>
          <img
            src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg"
            alt=""
          />
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navitems.map((nav) => (
            <li key={nav.id} className="text-[#000] cursor-pointer ">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div>
            <img src={search} alt="" className="w-5 h-5"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
