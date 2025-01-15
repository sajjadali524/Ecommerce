import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <form className="flex flex-col text-center space-y-3 lg:w-1/4 md:w-1/2 w-full px-3">
        <h1 className="font-semibold text-[20px]">Login</h1>
        <div className="w-full space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="outline-none border border-slate-300 py-1 px-3 rounded-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none border border-slate-300 py-1 px-3 rounded-md w-full"
          />
        </div>

        <div className="text-right">
          <Link
            to="/register"
            className="text-right hover:text-slate-400 font-semibold"
          >
            Create account
          </Link>
        </div>

        <div>
          <button className="bg-black text-white py-2 px-8 rounded-md hover:bg-slate-500">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;