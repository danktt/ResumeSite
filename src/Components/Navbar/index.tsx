/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

// Icons
import { AiFillHome } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";

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
    current: false,
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

export default function Navbar() {
  const [isTopNav, setIsTopNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsTopNav(true);
      } else {
        setIsTopNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // function ScrollTopNav() {
  //   if (window.scro > 1) {
  //     setIsTopNav(true);
  //   }
  // }

  return (
    <Disclosure
      as="nav"
      className={`${
        isTopNav ? "bg-slate-600  " : "bg-transparent z-20"
      } w-full fixed`}
    >
      {({ open }) => (
        <>
          <div className="max-w-5xl mx-auto px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-center h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}

                <Popover>
                  <div className="relative ml-4  md:px-6 lg:px-8 mx-auto">
                    <nav
                      className="relative flex items-center justify-between md:h-10 lg:justify-start "
                      aria-label="Global"
                    >
                      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                          <div className="-mr-2 flex items-center md:hidden">
                            <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none  ">
                              <span className="sr-only">Open main menu</span>
                              <MenuIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      {/* <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      
                      {item.name}
                    </a>
                  ))}
                  
                </div> */}
                    </nav>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel className="absolute z-10 top-0 mr-3 p-2 transition transform origin-top-right md:hidden">
                      <div className="rounded-lg shadow-md bg-black-figma ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                          <div className="-mr-2">
                            <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800  ">
                              <span className="sr-only">Close main menu</span>
                              <XIcon className="h-6 w-6 " aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1  w-60">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-yellow-figma text-white  flex gap-1.5 items-center justify-center text-lg"
                                  : "text-white  hover:text-yellow-figma flex gap-1.5 items-center justify-center  text-lg",
                                "px-3 py-2 rounded-md text-sm font-medium justify-center text-lg"
                              )}
                              aria-current={item.current ? "page" : true}
                            >
                              {item.icon}
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto rounded-full"
                    src="https://github.com/danktt.png"
                    alt="Danktt"
                  /> */}
                  {/* <img
                    className="hidden lg:block h-8 w-auto rounded-full"
                    src="https://github.com/danktt.png"
                    alt="Workflow"
                  /> */}

                  <a
                    href="#home"
                    className="underline decoration-yellow-figma mt-auto hidden md:block h-8 w-auto text-2xl text-white font-bold underline  underline-offset-2 ml-1 "
                  >
                    DANKTT
                  </a>
                  <span className=" underline decoration-yellow-figma mx-auto  block md:hidden md:self-center  h-8 w-auto text-white font-bold underline underline-offset-2 ml-1 ">
                    DANKTT
                  </span>
                </div>
                <div className="hidden  w-full  md:block md:ml-6">
                  <div className="flex justify-center  space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-yellow-figma text-lg flex gap-1.5 items-center"
                            : "text-gray-300 hover:bg-gray-700  hover:text-yellow-figma flex gap-1.5 items-center",
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
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                {/* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-14  rounded-full"
                        src="https://github.com/danktt.png"
                        alt="Danilo"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          // eslint-disable-next-line
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Download CV
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          // eslint-disable-next-line
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Setting
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
}
