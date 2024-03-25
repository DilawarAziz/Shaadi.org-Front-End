"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import TextFeild from "../../components/forms/textfeild";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Loader from "../../components/loader";


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
  const router = useRouter();
const onSubmit = (data)=>{
  try {
    router.push('/')
    
  } catch (error) {
    console.log(object);
  }
}
  return (
    <main className="bgwhite">
      <div className=" mx-auto  max-w-[1500px]  min-h-screen relative flex items-center justify-around py-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-[35%] md:w-[50%] w-[90%] mx-auto   bg-white">
          <div>
            <h2 className=" bg-red text-start  text-white p-3  font-semibold font-poppin  ">
            Sign In
            </h2>
          </div>
          <form  onSubmit={handleSubmit(onSubmit)} className=" space-y-6 px-4 py-6" >
            <div>
              <TextFeild
                name={"email"}
                inputType={"email"}
                label={"* Enter your Email / User name"}
                register={register}
                pattern
                error={errors.email?.message}
                required
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
                required
                error={errors?.password?.message}
              />
              <Link
                href={"/login"}
                className="cursor-pointer text-primary font-semibold block text-sm  text-end  hover:text-red"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="grid grid-cols-1  ">
              <Button
                className=" !rounded-full hover:!scale-100 hover:bg-red hover:text-white transition-all !duration-300  font-[12px]  px-4 text-red bg-primary !w-full"
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