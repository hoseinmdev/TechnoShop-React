import { AiOutlineArrowRight } from "react-icons/ai";
import { BiGame } from "react-icons/bi";
import { BsSmartwatch, BsSpeakerFill } from "react-icons/bs";
import {
  FaHeadphonesAlt,
  FaHome,
  FaLaptopCode,
  FaTabletAlt,
} from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import { NavLink } from "react-router-dom";

const routes = [
  { title: "Home", path: "/", icon: <FaHome /> },
  { title: "Phones", path: "/categories/phones", icon: <GoDeviceMobile /> },
  { title: "Tablets", path: "/categories/tablets", icon: <FaTabletAlt /> },
  { title: "Laptops", path: "/categories/laptops", icon: <FaLaptopCode /> },
  {
    title: "Speakers",
    path: "/categories/speakers",
    icon: <BsSpeakerFill />,
  },
  {
    title: "Smartwatches",
    path: "/categories/digitalWatches",
    icon: <BsSmartwatch />,
  },
  {
    title: "Headphones",
    path: "/categories/headphones",
    icon: <FaHeadphonesAlt />,
  },
  { title: "Gaming", path: "/categories/consoles", icon: <BiGame /> },
];

const Links = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-5 text-gray-700 lg:w-auto lg:flex-row lg:items-center lg:gap-3 ">
      {routes.map((item) => {
        return (
          <NavLink
            key={item.title}
            className={({ isActive }) =>
              `flex w-full items-center justify-center gap-2 px-2 py-1 text-gray-700 lg:w-fit lg:cursor-pointer lg:border-b-2
                ${
                  isActive
                    ? "border-violet-600 font-bold text-violet-600 dark:border-violet-400 dark:font-normal dark:text-violet-400 "
                    : "border-white dark:border-gray-800 dark:text-white/60 lg:hover:border-violet-700 dark:lg:hover:border-violet-500"
                }
              }`
            }
            to={item.path}
          >
            <div className="hidden lg:flex">{item.icon}</div>
            <div className="flex w-full justify-between font-semibold">
              {item.title}
              <AiOutlineArrowRight className="lg:hidden" />
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Links;
