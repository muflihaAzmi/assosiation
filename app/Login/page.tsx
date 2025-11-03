import React from "react";
import LoginPage from "./LoginImage";
import Link from "next/link";

function LoginMain() {
  return (
    <div>
      <div className=" md:flex md:flex-row ">
        <div className="hidden md:block">
          {" "}
          <LoginPage />
        </div>

        <div className="flex flex-col justify-center lg:ml-20 lg:w-[600px] w-full mt-25 px-5">
          <h1 className="text-black font-semibold text-3xl">Log In</h1>
          <div className="flex flex-row gap-2">
            <h1 className="text-gray-400 text-l">Don’t have a membership?</h1>
            <Link
              href="/signup"
              className="underline hover:text-[var(--hovergreen)]"
            >
              Sign up
            </Link>
          </div>
          <div className="flex sm:flex-row flex-col gap-5 mt-10">
            <div className="relative flex flex-col w-full">
              {/* Label */}
              <label className=" bg-white px-2 sm:px-3 text-gray-400 text-[12px] font-medium  absolute   md:-top-3   left-5">
                Email Adress
              </label>

              {/* Input Box */}
              <div className="bg-white border border-gray-200 rounded-xl flex  hover:border-secondary">
                <input
                  type="text"
                  className="rounded-xl  w-full  py-3 sm:py-4 px-4 sm:px-5  md:w-[190px] lg:w-[260px] outline-none   "
                />
              </div>
            </div>

            <div className="relative flex flex-col w-full">
              {/* Label */}
              <label className="absolute md:-top-3 left-5 bg-white text-gray-400  px-2 sm:px-3 text-xs text-[12px] font-medium">
                Password
              </label>

              {/* Input Box */}
              <div className="bg-blue-100 border border-gray-200 rounded-xl flex  hover:hovergrren">
                <input
                  type="text"
                  className="outline-none rounded-xl w-full py-3 sm:py-4 px-4 sm:px-5  md:w-[190px] lg:w-[260px] font-medium"
                />
              </div>
            </div>
          </div>
          <Link
            href=""
            className="text-gray-400 mt-5 text-[12px] hover:text-[var(--hovergreen)] "
          >
            forgot your password?
          </Link>
          <div className="w-full py-3 bg-greencol font-medium flex justify-center items-center  hover:bg-[var(--hovergreen)] rounded-xl mt-10 duration-300 transition ease-in-out">
            <button>Log in</button>
          </div>
          <div className="border  mt-10 grid grid-rows-2 ">
            <h1 className="border-b-1 py-2 pl-10">
              <span className="font-bold">Admin:</span>admin@gmail.com | 123456
            </h1>
            <h1 className="py-2 pl-10">
              <span className="font-bold">Alumini:</span>alumini@gmail.com |
              123456
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginMain;
