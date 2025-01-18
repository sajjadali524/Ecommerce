import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className="flex items-center justify-between lg:px-20 md:px-20 px-3 border-b py-2 fixed top-0 left-0 w-full bg-white z-10">
      <Link to="dashboard">
        <h1 className="text-xl font-semibold">ECOMMERCE</h1>
        <p className="opacity-50 font-semibold">ADMIN PANEL</p>
      </Link>

      <button className="bg-slate-300 py-2 px-3 rounded-full hover:bg-slate-500 text-[15px]">Logout</button>
    </div>
  )
}

export default AdminHeader;
