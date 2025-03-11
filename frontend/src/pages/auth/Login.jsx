import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleUserInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post("http://localhost:8000/api/v1/user/login", formData, {withCredentials: true});
      if(response.data.user.role === "user") {
        window.localStorage.setItem("token", response.data.token);
        window.location.href = "/"
      }else {
        window.localStorage.setItem("admin", response.data.token)
        window.location.href = "/dashboard"
      }
    } catch (error) {
      toast.error("Inavlid Credentials", error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <form className="flex flex-col text-center space-y-3 lg:w-1/4 md:w-1/2 w-full px-3" onSubmit={loginUser}>
        <h1 className="font-semibold text-[20px]">Login</h1>
        <div className="w-full space-y-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="outline-none border border-slate-300 py-1 px-3 rounded-md w-full"
            onChange={handleUserInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="outline-none border border-slate-300 py-1 px-3 rounded-md w-full"
            onChange={handleUserInput}
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
          <button className="bg-black text-white py-2 px-8 rounded-md hover:bg-slate-500" disabled={loading}>
            {loading ? <Loader /> : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;