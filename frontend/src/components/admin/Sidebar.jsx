import { IoIosAddCircleOutline } from "react-icons/io";
import { RiFileListLine } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="space-y-5 pt-10">
        <Link to="add-items" className="flex items-center gap-3 border p-2 hover:bg-pink-200 opacity-70"><IoIosAddCircleOutline className="text-[18px]" />Add Items</Link>
        <Link to="list-items" className="flex items-center gap-3 border p-2 hover:bg-pink-200 opacity-70"><RiFileListLine className="text-[18px]" />List Items</Link>
        <Link to="orders" className="flex items-center gap-3 border p-2 hover:bg-pink-200 opacity-70"><IoBagCheckOutline className="text-[18px]" />Orders</Link>
    </div>
  )
}

export default Sidebar;
