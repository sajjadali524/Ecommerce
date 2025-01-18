import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <AdminHeader />

      <div className="flex lg:flex-row flex-col lg:px-20 md:px-20 px-3">
        <div className="lg:h-screen pt-20 lg:w-1/6 w-full lg:border-r border-b">
          <Sidebar />
        </div>
        <div className="pt-20">
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Layout;
