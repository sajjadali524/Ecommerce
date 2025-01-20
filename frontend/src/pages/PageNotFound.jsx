import { Link } from "react-router-dom";

const PageNotFound = () => {
  const isAdmin = window.localStorage.getItem("admin");

  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center h-screen">
      <h1 className="text-[50px] font-semibold opacity-70"><span className="text-red-500">404</span>Page Not Found</h1>
      <Link to={`${isAdmin ? "/dashboard" : "/"}`} className="border border-slate-300 hover:bg-slate-500 hover:text-white px-10 py-3">Go to Home</Link>
    </div>
  )
}

export default PageNotFound;