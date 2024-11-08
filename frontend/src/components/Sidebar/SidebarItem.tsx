import React from "react";
import Link from "next/link";

interface SidebarItemProps {
  item: {
    icon: JSX.Element;
    label: string;
    route: string;
  };
  pageName: string;
  setPageName: (name: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, pageName, setPageName }) => {
  const isActive = pageName === item.route;

  const handleClick = () => {
    setPageName(item.route);
  };

  return (
    <li>
      <Link href={item.route} onClick={handleClick} className={`flex items-center gap-4 p-2.5 rounded-md ${isActive ? "bg-primary text-white" : "text-body dark:text-bodydark2 hover:bg-gray-200 dark:hover:bg-meta-4"}`}>
        {item.icon}
        <span className="hidden xl:block">{item.label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
