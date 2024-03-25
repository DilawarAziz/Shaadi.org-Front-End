"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import TextFeild from "../components/forms/TextFeild";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });
  const router = useRouter();

  return (
    <main className="bgwhite">
      <div className=" mx-auto  max-w-[1500px]  min-h-screen relative flex items-center justify-around py-8 px-4 sm:px-6 lg:px-8">
        <div className=" bg-white md:w-[60%] w-[90%] mx-auto  ">
          <div>
          <h2 className=" bg-red text-start  text-white p-3  font-semibold font-poppin  ">
          Register
            </h2>
          </div>
          <form
            className="py-6 px-4 space-y-6"
          >
            <div className="">
              <TextFeild
                required
                name={"first_name"}
                inputType={"text"}
                label={"First Name"}
                register={register}
                placeholder={"First Name"}
                maxLength={{ value: 30, message: "Max Length 30" }}
                minLength={{ value: 4, message: "Min Length 4" }}
                error={errors?.first_name?.message}
              />
            </div>
            <div className="flex items-center gap-4">
              <TextFeild
                required
                name={"last_name"}
                inputType={"text"}
                register={register}
                label={"Last Name"}
                placeholder={"Last Name"}
                maxLength={{ value: 20, message: "Max Length 20" }}
                error={errors?.last_name?.message}
              />
              <TextFeild
                required
                name={"last_name"}
                inputType={"text"}
                register={register}
                label={"Last Name"}
                placeholder={"Last Name"}
                maxLength={{ value: 20, message: "Max Length 20" }}
                error={errors?.last_name?.message}
              />
            </div>
            <div className="flex items-center gap-4">
              <TextFeild
                required
                name={"email"}
                inputType={"email"}
                register={register}
                label={"Email"}
                placeholder={"email"}
                error={errors?.email?.message}
              />
              <TextFeild
                required
                name={"email"}
                inputType={"email"}
                register={register}
                label={"Email"}
                placeholder={"email"}
                error={errors?.email?.message}
              />
            </div>
            <div className="flex items-center gap-4">
              <TextFeild
                required
                name={"password"}
                inputType={"password"}
                label={"password"}
                minLength={{ value: 6, message: "Min Length 6" }}
                register={register}
                placeholder={"**************"}
                error={errors.password?.message}
              />
              <TextFeild
                required
                name={"password"}
                inputType={"password"}
                label={"password"}
                minLength={{ value: 6, message: "Min Length 6" }}
                register={register}
                placeholder={"**************"}
                error={errors.password?.message}
              />
            </div>
            <div className="flex items-center gap-4">
              <TextFeild
                name={"cpassword"}
                inputType={"password"}
                label={"Confirm Password"}
                register={register}
                validate={(value) =>
                  value === getValues().password || "Passwords must match"
                }
                placeholder={"**************"}
                error={errors?.cpassword?.message}
              />
               <TextFeild
                required
                name={"password"}
                inputType={"password"}
                label={"password"}
                minLength={{ value: 6, message: "Min Length 6" }}
                register={register}
                placeholder={"**************"}
                error={errors.password?.message}
              />
            </div>
            <div className="flex items-center gap-4">
              <TextFeild
                name={"cpassword"}
                inputType={"password"}
                label={"Confirm Password"}
                register={register}
                validate={(value) =>
                  value === getValues().password || "Passwords must match"
                }
                placeholder={"**************"}
                error={errors?.cpassword?.message}
              />
               <TextFeild
                required
                name={"password"}
                inputType={"password"}
                label={"password"}
                minLength={{ value: 6, message: "Min Length 6" }}
                register={register}
                placeholder={"**************"}
                error={errors.password?.message}
              />
            </div>
            <div className="flex items-center gap-4">
              <TextFeild
                name={"cpassword"}
                inputType={"password"}
                label={"Confirm Password"}
                register={register}
                validate={(value) =>
                  value === getValues().password || "Passwords must match"
                }
                placeholder={"**************"}
                error={errors?.cpassword?.message}
              />
               <TextFeild
                required
                name={"password"}
                inputType={"password"}
                label={"password"}
                minLength={{ value: 6, message: "Min Length 6" }}
                register={register}
                placeholder={"**************"}
                error={errors.password?.message}
              />
            </div>
            <div className="flex items-center gap-4 w-1/2">
              <TextFeild
                name={"cpassword"}
                inputType={"password"}
                label={"Confirm Password"}
                register={register}
                validate={(value) =>
                  value === getValues().password || "Passwords must match"
                }
                placeholder={"**************"}
                error={errors?.cpassword?.message}
              />
             
            </div>

            <div>
            <Button
                disabled={loader ? true : false}
                className=" !rounded-full hover:!scale-100 hover:bg-red hover:text-white transition-all !duration-300  font-[12px] w-full px-4 text-red bg-primary"
                type="submit"
              >SignUp
              
              </Button>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">
                Already a member?{" "}
                <Link
                  href={"/login"}
                  className="text-orange cursor-pointer text-red hover:underline"
                >
                  Login Now
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