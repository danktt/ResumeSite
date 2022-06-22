import {
  FaAngleDoubleLeft,
  FaFileAlt,
  FaHistory,
  FaSearch,
} from "react-icons/fa";

const MenuItems = [
  {
    href: "consult",
    icon: <FaSearch />,
    name: "Consultar SCR",
  },
  {
    href: "history",
    icon: <FaHistory />,
    name: "Histórico de consultas",
  },
  {
    href: "report",
    icon: <FaFileAlt />,
    name: "Relatório",
  },
];

export default function Menu() {
  return (
    <>
      <div className="drawer-side text-neutral-content">
        <label htmlFor="drawer-menu" className="drawer-overlay">
          <label
            htmlFor="drawer-menu"
            className="btn lg:hidden btn-primary absolute left-[335px] top-6 "
          >
            <FaAngleDoubleLeft />
          </label>
        </label>
        <ul className="menu  p-4 bg-neutral overflow-y-auto w-80">
          <div className="mt-5" />
          <h1>LOGO</h1>
          <div className="flex-col flex items-center">
            <div className="m-2" />
            <hr className="w-5/6" />
            <div className="m-4" />
          </div>
          {MenuItems.map((item, index) => (
            <h1 key={index} ref={item.href}>
              {item.name}
            </h1>
          ))}
        </ul>
      </div>
    </>
  );
}
