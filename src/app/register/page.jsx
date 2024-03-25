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
import SelectInput from "../components/forms/select";
import { GetUser } from "../components/token";
const Page = () => {
  const [loader, setLoader] = useState(false);
  const router = useRouter();

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
      reasonforregistering: "",
      gender: "",
      username: "",
      country: "",
      dateofbirth: "",
      state: "",
      city: "",
      maritalstatus: "",
      secondmarriage: "",
      phone: "",
    },
  });
  const onSubmit =  (data) => {
    
    try {
      
         localStorage.setItem("user",  JSON.stringify({ data }) );
        router.push('/')
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <main className="bgwhite">
      <div className=" mx-auto  max-w-[1500px]  min-h-screen relative flex  justify-around py-8 px-4 sm:px-6 lg:px-8">
        <div className=" bg-white md:w-[60%] w-[90%] mx-auto  ">
          <div>
            <h2 className=" bg-red text-start  text-white p-3  font-semibold font-poppin  ">
              Register
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-6 px-4 space-y-6"
            noValidate
          >
            <div className="">
              <TextFeild
                required
                name={"gender"}
                inputType={"text"}
                label={"*Gender"}
                register={register}
                placeholder={"First Name"}
                error={errors?.gender?.message}
              />
            </div>
            <div className="flex  gap-4">
              <TextFeild
                required
                name={"first_name"}
                inputType={"text"}
                label={"First Name"}
                register={register}
                placeholder={"First Name"}
                error={errors?.first_name?.message}
              />
              <TextFeild
                required
                name={"last_name"}
                inputType={"text"}
                register={register}
                label={"Last Name"}
                placeholder={"Last Name"}
                error={errors?.last_name?.message}
              />
            </div>
            <div className="flex  gap-4">
              <TextFeild
                required
                name={"username"}
                inputType={"text"}
                register={register}
                label={"*Username"}
                placeholder={"username"}
                error={errors?.username?.message}
              />
              <TextFeild
                required
                name={"dateofbirth"}
                inputType={"date"}
                register={register}
                label={"*Date of Birth"}
                placeholder={"*Date of Birth"}
                error={errors?.dateofbirth?.message}
              />
            </div>
            <div className="flex  gap-4">
              <SelectInput
                register={register}
                label="*Country"
                name="country"
                error={errors}
                required
              />
              <SelectInput
                register={register}
                label="*State"
                name="state"
                error={errors}
                required
              />
            </div>
            <div className="flex  gap-4">
              <SelectInput
                register={register}
                label="*City"
                name="city"
                error={errors}
                required
              />

              <SelectInput
                register={register}
                label="*Marital Status"
                name="maritalstatus"
                error={errors}
                required
              />
            </div>
            <div className="flex  gap-4">
              <SelectInput
                register={register}
                label="*Second Marriage"
                name="secondmarriage"
                error={errors}
                required
              />
              <SelectInput
                register={register}
                label="*Reason for Registering"
                name="reasonforregistering"
                error={errors}
                required
              />
            </div>

            <div className="flex  gap-4 w-full">
              <TextFeild
                name={"phone"}
                inputType={"text"}
                label={"*Mobile #"}
                register={register}
                required
                placeholder={"phone"}
                error={errors?.phone?.message}
              />
              <TextFeild
                name={"email"}
                inputType={"email"}
                label={"*Email"}
                register={register}
                placeholder={"email"}
                pattern={true}
                required
                error={errors?.email?.message}
              />
            </div>
            <div className="flex  gap-4 w-full">
              <TextFeild
                name={"password"}
                required
                inputType={"password"}
                label={"*Password"}
                register={register}
                placeholder={"password"}
                error={errors?.password?.message}
              />
            </div>

            <div>
              <Button
                className=" !rounded-full hover:!scale-100 hover:bg-red hover:text-white transition-all !duration-300  font-[12px] w-full px-4 text-red bg-primary"
                type="submit"
              >
                Register
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
