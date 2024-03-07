import { FC } from "react";
import Searchbar from "./Searchbar";
import LogoutButton from "./LogoutButton";
import Converstations from "./Coversations";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <Searchbar />
      <div className="divider px-3"></div>
      <Converstations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
