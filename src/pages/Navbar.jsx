import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  //   const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-black text-[18px] font-bold">
            Aakash &nbsp;
            <span className="sm:block hidden"> | Software Engineer</span>
          </p>
        </Link>

        <ul className="list-none">
          {navLinks.map((nav) => (
            <li
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-black text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
