import React from "react";
import { Handshake } from "lucide-react";

function LoginPage() {
  return (
    <div>
      <div className="lg:pl-50 w-full">
        <div className="relative h-lvh lg:w-[450px] md:w-[350px] overflow-hidden">
          <img
            src="/graduation.jpg"
            alt="background"
            className="absolute inset-0 md:w-[450px] h-[100lvh] object-cover blur-md scale-110 hidden sm:block"
          />
          <div className="relative z-10 text-white top-80 md:w-[350px] items-center lg:ml-13 gap-5  px-2 w-full">
            <div className="text-white flex items-center flex-row gap-2">
              <Handshake className="text-greencol hidden md:block" />

              <h1 className="text-2xl font-bold ">Assosiation</h1>
            </div>

            <h1 className="text-4xl font-bold mt-5 ">Welcome Back</h1>
            <p className="text-l text-white ">
              Register now to see people who have attended or graduated from a
              particular school, college or university.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
