"use client";

import { Architects_Daughter } from "next/font/google";
import { FaHome, FaBookOpen, FaHotel } from "react-icons/fa";
import { MdOutlineDataUsage } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { BiSolidCategory } from "react-icons/bi";
import {
  Sidebar as ReactProSidebar,
  Menu,
  MenuItem,
  sidebarClasses,
} from "react-pro-sidebar";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ArchitectsDaughter = Architects_Daughter({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

type Props = {};
function Sidebar({}: Props) {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState("/admin/dashboard");
  const menuItems = [
    { label: "Dashboard", icon: <FaHome />, link: "/admin/dashboard" },
    {
      label: "Trips",
      icon: <BiSolidCategory />,
      link: "/admin/trips",
    },
    {
      label: "Hotels",
      icon: <FaHotel />,
      link: "/admin/hotels",
    },
    {
      label: "Bookings",
      icon: <FaBookOpen />,
      link: "/admin/bookings",
    },
    {
      label: "Scrape Data",
      icon: <MdOutlineDataUsage />,
      link: "/admin/scrape-data",
    },
  ];

  const handleItemClick = (link: string) => {
    setSelectedItem(link), router.push(link);
  };
  return (
    <div className="min-h-[100vh] overflow-hidden">
      <ReactProSidebar
        className="h-full overflow-hidden"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#ffffff",
            },
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              return {
                backgroundColor: active ? "#0E1428" : "#ffffff",
                color: active ? "#ffffff" : "#000000",
                "&hover": {
                  backgroundColor: active ? "#0E1428" : "#0E1428",
                  color: active ? "#ffffff" : "#ffffff",
                },
              };
            },
          }}
          className="h-[100vh] max-h-[100vh] text-black overflow-hidden"
        >
          <div className="flex items-center justify-center my-10 flex-col">
            <Image
              src="/logo.png"
              alt="logo"
              height={150}
              width={150}
              className="cursor-pointer"
              onClick={() => router.push("/admin/dashboard")}
            />
            <span className="text-3xl uppercase font-medium italic">
              <span className={ArchitectsDaughter.className}>Travel App</span>
            </span>
          </div>
          {menuItems.map((item, index) => (
            <div key={index}>
              <MenuItem
                onClick={() => handleItemClick(item.link)}
                icon={item.icon}
                active={selectedItem === item.link}
              >
                {item.label}
              </MenuItem>
            </div>
          ))}
          <MenuItem
            icon={<LuLogOut />}
            active={selectedItem === "/admin/logout"}
          >
            Logout
          </MenuItem>
        </Menu>
      </ReactProSidebar>
    </div>
  );
}
export default Sidebar;
