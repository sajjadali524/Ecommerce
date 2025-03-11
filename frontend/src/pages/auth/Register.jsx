import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    phone_number: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false)

  const handleUserInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await axios.post("http://localhost:8000/api/v1/user/register", formData, {withCredentials: true})
      window.location.href = "/login";
      
    } catch (error) {
      if(!formData.first_name || !formData.last_name || !formData.date_of_birth || !formData.email || !formData.gender || !formData.gender || !formData.password) {
        toast.error("All field are required", error)
      }else {
        toast.error("User Already Register")
      }
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-screen">
      <form className="flex flex-col text-center space-y-3 lg:w-1/4 md:w-1/2 w-full px-3" onSubmit={registerUser}>
        <h1 className="font-semibold text-[20px]">Create Account</h1>
        <div className="w-full space-y-3">
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            className="outline-none border border-slate-300 py-1 px-3 rounded-md w-full"
            onChange={handleUserInput}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="outline-none border border-slate-300 py-1 px-3 rounded-md w-full"
            onChange={handleUserInput}
          />
          <input
            type="date"
            name="date_of_birth"
            placeholder="Date of Birth"
            className="outline-none border border-slate-300 py-1 px-3 rounded-md w-full"
            onChange={handleUserInput}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            className="outline-none border border-slate-300 py-1 px-3 rounded-md w-full"
            onChange={handleUserInput}
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            className="outline-none border border-slate-300 py-1 px-3 rounded-md w-full"
            onChange={handleUserInput}
          />
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
            to="/login"
            className="text-right hover:text-slate-400 font-semibold"
          >
            Already have an account
          </Link>
        </div>

        <div>
          <button className="bg-black text-white py-2 px-8 rounded-md hover:bg-slate-500" disabled={loading}>
            {loading ? <Loader /> : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;