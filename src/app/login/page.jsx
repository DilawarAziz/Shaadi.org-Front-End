"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Header from "@/components/Header/header";
import Button from "@/components/ui/Button";
import TextFeild from "@/components/forms/textfeild";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Loader from "@/components/loader";


const Page = () => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });


  return (
    <main className="bgwhite">
      <div className=" mx-auto  max-w-[1500px]  min-h-screen relative flex items-center justify-around py-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-[35%] md:w-[50%] w-[90%] mx-auto   bg-white">
          <div>
            <h2 className=" bg-red text-start  text-white p-3  font-semibold font-poppin  ">
            Sign In
            </h2>
          </div>
          <form  className=" space-y-6 px-4 py-6">
            <div>
              <TextFeild
                name={"email"}
                inputType={"email"}
                label={"* Enter your Email / User name "}
                register={register}
                error={errors.email?.message}
                placeholder={"Email Address"}
              />
            </div>
            <div>
              <TextFeild
                name={"password"}
                paswordlable={"Password"}
                label={"* Password"}
                register={register}
                inputType={"password"}
                placeholder={"**************"}
                error={errors?.password?.message}
              />
              <Link
                href={"/forget_Password"}
                className="cursor-pointer text-primary font-semibold block text-sm  text-end  hover:text-blue-500"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                disabled={loader ? true : false}
                className=" !rounded-full hover:!scale-100 hover:bg-red hover:text-white transition-all !duration-300  font-[12px] w-full px-4 text-red bg-primary"
                type="submit"
              >
                Login
            
              </Button>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                Don&apos;t have an account ?{" "}
                <Link href={"/register"} className="text-red cursor-pointer hover:underline">
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </div>

        <ToastContainer />
      </div>
    </main>
  );
};

export default Page;