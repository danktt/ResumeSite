import { AiFillHome } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { RiContactsBookFill } from "react-icons/ri";
// import About from "../../Pages/About";
// import Contact from "../../Pages/Contact";
// import Education from "../../Pages/Education";
// import Experience from "../../Pages/Experience";

const navigation = [
  { name: "Home", href: "#home", current: true, icon: <AiFillHome /> },
  {
    name: "About",
    href: "#about",
    current: false,
    icon: <BsFillFilePersonFill />,
  },
  { name: "Education", href: "#education", current: false, icon: <IoSchool /> },
  {
    name: "Experience",
    href: "#experience",
    current: true,
    icon: <FaNewspaper />,
  },
  {
    name: "Contact",
    href: "#contact",
    current: false,
    icon: <RiContactsBookFill />,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function Layout() {
  return (
    <div id="about" className="flex ">
      <div className="flex flex-col w-96 h-screen px-4   ">
        <h2 className="text-3xl font-semibold text-center text-yellow-figma">
          Logo
        </h2>

        <div className="flex flex-col justify-between mt-6  ">
          <aside>
            <div className=" md:block md:ml-6">
              <div className="flex flex-col   space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-yellow-figma flex gap-1.5 items-center"
                        : "text-gray-300 hover:bg-gray-700 hover:text-yellow-figma flex gap-1.5 items-center",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : true}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="w-full h-screen overflow-y-auto scroll-smooth"></div>
    </div>
  );
}
