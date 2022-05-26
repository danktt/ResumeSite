 import {AiFillHome} from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";

import { BeakerIcon } from "@heroicons/react/solid";
import { ReactElement } from "react";
// import { Link } from "react-router-dom";
// import { itemNavbar } from "./data";

export interface itemNavbarItemProp {
  title: string;
  path: string;
  icon: ReactElement;
}
const itemNavbar: itemNavbarItemProp[] = [
  { title: "Home", path: "/#", icon: <AiFillHome /> },
  { title: "About", path: "/about", icon: <BsFillFilePersonFill /> },
  { title: "Education", path: "/education", icon: <IoSchool /> },
  { title: "Experience", path: "/experience", icon: <FaNewspaper /> },
  { title: "Contact", path: "/contact", icon: <RiContactsBookFill /> },
];

export default function Navbar() {
  // const [ itemNavbarnavItem, setNavItem ] = useState(itemNavbar)

  return (
    <nav className="bg-transparent  px-2 sm:px-4 py-2.5 ">
      <div className="content flex justify-around">
        <div className="flex items-center ">
          <img
            src="https://github.com/danktt.png"
            alt="danilo"
            className="h-12 rounded-full"
          />
        </div>
        <div className="flex justify-end  items-center ">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            {itemNavbar.map((item) => {
              return (
                <li key={item.title}>
                  <a className=" flex items-center gap-1.5 cursor-pointer pr-4 pl-3 text-gray-100 hover:text-amber-600 transition delay-75">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-lg">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
