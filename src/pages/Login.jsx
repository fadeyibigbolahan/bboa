import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import mobile_llama from "../images/mobile_llama.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [emailAdd, setEmailAdd] = useState("");
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center md:mx-20 mt-2 mx-2">
      <Header />
      <div className="w-full bg-[#E21637] p-4">
        <p className="text-white text-xl">Log In to Online Banking</p>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center w-full my-4 p-8">
        <div className="flex md:justify-start justify-center items-center md:w-2/5 w-full">
          <form className="w-full flex flex-col justify-center items-center">
            <div className="mb-8 md:w-2/3 w-full">
              <p className="text-black text-xl">User ID</p>
              <input
                className="border border-gray-400 w-full p-[2px]"
                type="text"
                value={emailAdd}
                onChange={(e) => setEmailAdd(e.target.value)}
              />
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <label for="vehicle1"> Save this User ID</label>
              <br></br>
            </div>
            <div className="mb-8 md:w-2/3 w-full">
              <p className="text-black text-xl">Password</p>
              <input
                className="border border-gray-400 w-full p-[2px]"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-blue-600 text-xs my-4 font-semibold cursor-pointer hover:underline">
                Forgot your password?
              </p>
              {isCorrect == false && (
                <div className="flex justify-center items-center w-full rounded-md bg-red-400 p-2 my-4">
                  <p>credentials not correct</p>
                </div>
              )}
            </div>
            <Link
              to={
                "Samson1980$" == password && "Jordan112" == emailAdd
                  ? "/user"
                  : "#"
              }
              onClick={() =>
                ("Samson1980$" !== password && "Jordan112" !== emailAdd) ||
                password == "" ||
                emailAdd == ""
                  ? setTimeout(() => setIsCorrect(false), 1000)
                  : setIsCorrect(true)
              }
            >
              <input
                className="bg-blue-600 rounded-md text-white px-8 py-[4px] text-lg cursor-pointer"
                type="submit"
                value="Log In"
              />
            </Link>
          </form>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-start md:w-3/5 w-full md:border-l md:border-gray-400 p-4">
          <div className="flex flex-col md:w-3/5 w-full md:m-4 m-1">
            <p className="text-lg">Stay connected with our app</p>
            <div className="flex flex-row justify-start items-center my-2">
              <img src={mobile_llama} className="w-1/2" alt="Logo" />
              <div className="ml-2">
                <p className="text-lg">Secure, convenient banking anytime</p>
                <a
                  href="javascript:void(0);"
                  className="flex bg-red-600 rounded-md my-2 text-white p-2 w-4/5 justify-center items-center"
                >
                  <p className="text-lg">Get the app</p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-2/5 w-full md:m-4 m-1">
            <div>
              <p className="text-lg border-b border-gray-300 py-2">
                Login help
              </p>
              <p className="text-blue-600 text-xs my-2 font-semibold cursor-pointer hover:underline">
                Forgot ID/Password?
              </p>
              <p className="text-blue-600 text-xs my-2 font-semibold cursor-pointer hover:underline">
                Problem logging in?
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg border-b border-gray-300 py-2">
                Quick links
              </p>
              <a
                href="https://secure.bankofamerica.com/login/enroll/entry/olbEnroll.go?reason=model_enroll"
                className="text-blue-600 text-xs my-2 font-semibold cursor-pointer hover:underline"
              >
                Enroll now
              </a>
              <a
                href="https://www.bankofamerica.com/onlinebanking/learning-center.go"
                className="text-blue-600 text-xs my-2 font-semibold cursor-pointer hover:underline"
              >
                Learn more about online banking
              </a>
              <a
                href="https://www.bankofamerica.com/online-banking/service-agreement.go"
                className="text-blue-600 text-xs my-2 font-semibold cursor-pointer hover:underline"
              >
                Service agreement
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
