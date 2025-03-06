import { navLinks } from "./headerLinks";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cart, login, search, navbar } from "../../constants/images";
import { BiLogOut } from "react-icons/bi";
import "../../index.css";
import { useState } from "react";
import SearchBox from "../SearchBox";
import axios from "axios";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchBoxVisible, setISSearchBoxVisible] = useState(false);
  const location = useLocation();
  const token = window.localStorage.getItem("token");

  const handleSearchBox = () => {
    setISSearchBoxVisible(true);
  };

  const logoutUser = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/v1/user/logout",
        {},
        { withCredentials: true }
      );
      window.localStorage.removeItem("token");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-50 bg-white lg:flex hidden items-center justify-between px-32 py-5 shadow-lg w-screen">
        <Link to="/" className="font-[500] text-pink-600">
          Eco<sapn className="text-black">mmerce</sapn>
        </Link>

        <ul className="flex items-center gap-7">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={link.path}
                  activeClassName="active"
                  className="font-[500]"
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          {location.pathname === "/collection" && (
            <button onClick={handleSearchBox}>
              <img src={search} alt="image" className="w-6 cursor-pointer" />
            </button>
          )}
          {token ? (
            <BiLogOut
              className="text-[23px] cursor-pointer"
              onClick={logoutUser}
            />
          ) : (
            <Link to="/login">
              <img src={login} alt="image" className="w-6" />
            </Link>
          )}
          <div className="relative">
            <Link to="/cart">
              <img src={cart} alt="image" className="w-6" />
              <span className="absolute left-[50%] top-[40%] bg-black rounded-full flex items-center justify-center text-white font-semibold w-4 h-4 text-[10px]">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* search box  */}
      {isSearchBoxVisible && (
        <SearchBox searchBoxClose={setISSearchBoxVisible} />
      )}

      {/* mobile view  */}

      <div className="">
        <div
          className={`fixed top-0 left-0 z-50 bg-white w-full lg:hidden flex items-center justify-between py-5 px-3 ${
            isOpen ? "" : "shadow-lg"
          }`}
        >
          <div className="flex items-center gap-2">
            <button>
              <img
                src={navbar}
                alt="image"
                className="w-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </button>
            <Link to="/home" className="font-[500] text-pink-600">
              Eco<sapn className="text-black">mmerce</sapn>
            </Link>
          </div>
          <div
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            {location.pathname === "/collection" && (
              <button onClick={handleSearchBox}>
                <img src={search} alt="image" className="w-6 cursor-pointer" />
              </button>
            )}
            {token ? (
              <BiLogOut
                className="text-[23px] cursor-pointer"
                onClick={logoutUser}
              />
            ) : (
              <Link to="/login">
                <img src={login} alt="image" className="w-6" />
              </Link>
            )}
            <div className="relative">
              <Link to="/cart">
                <img src={cart} alt="image" className="w-6" />
                <span className="absolute left-[50%] top-[40%] bg-black rounded-full flex items-center justify-center text-white font-semibold w-4 h-4 text-[10px]">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {isOpen && (
          <ul className="flex flex-col items-left gap-5 px-10 pt-5 bg-white shadow-lg py-20 transition-all duration-500 ease-in-out transform">
            {navLinks.map((link, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <NavLink
                  to={link.path}
                  activeClassName="active"
                  className="font-[500]"
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;