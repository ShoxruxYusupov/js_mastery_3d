import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("'");
  const [toogle, setToogle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setActive("")}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex gap-1">
            ShoxruX <span className="sm:block hidden">| Wantxo</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((item) => {
            return (
              <li
                key={item.id}
                className={`${
                  active === item.id ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(item.id)}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toogle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToogle(!toogle)}
          />

          <div
            className={`${
              toogle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`${
                      active === item.id ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToogle(!toogle);
                      setActive(item.id);
                    }}
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
