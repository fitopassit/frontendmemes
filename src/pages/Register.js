import React from "react";
import registerimg from "../assets/img/register/register.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[1000px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={registerimg} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">VALENKOFF</h2>
            <div className="flex flex-col justify-around">
              <input
                className="border p-2"
                type="text"
                placeholder="Username"
              />
              <input className="border p-2" type="email" placeholder="Email" />
              <input
                className="border p-2"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="w-full py-2 my-4 bg-green-600 hover:bg-green-500">
              Sign Up
            </button>
            <div className="text-center">
              <Link to="/recovery">Forgot Username or Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
