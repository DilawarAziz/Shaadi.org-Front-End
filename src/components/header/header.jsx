"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Headerslider from "./headerslider";
import Dropdown from "./dropdown";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import Link from "next/link";
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   // if (window !== undefined) {
  //   const handleScroll = () => {
  //       setScrollY(window.scrollY);
  //     }

  //   // just trigger this so that the initial state 
  //   // is updated as soon as the component is mounted
  //   // related: https://stackoverflow.com/a/63408216
  //   handleScroll();

  //   window.addEventListener("scroll", handleScroll , { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };

  //   // };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
// console.log(scrollY);

  return (
    <div className=" bg-transparent  w-full">
      <div className={`max-w-screen-xl mx-auto py-8 ${scrollY>100?"hidden":""}`}>
        <div className="  flex justify-between items-center w-full">
          <Image
            src={"/landing/Shaadi-Organization-Pakistan-Rishta-Logo.svg"}
            className="w-[10%]"
            width={0}
            height={0}
            sizes={"100vw"}
            alt="User Icon"
          />

          <Headerslider />
          <div className="flex items-center gap-4">
          <Link href={'/register'} className={"flex border-red text-red hover:bg-red group hover:text-white hover:border-white transition-all duration-200 border font-semibold rounded-[4px] items-center gap-2 !px-3 py-2"}>
              {" "}
              <FaUserPlus />
              Register
            </Link>
            <Link href={'/login'} className={"flex border-red text-red hover:bg-red group hover:text-white hover:border-white transition-all duration-200  border font-semibold rounded-[4px] items-center gap-2 !px-3 py-2"}>
              {" "}
              <FaUser />
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className={`!bg-red   z-20 flex  items-center justify-center  p-6 w-full `}>
        <div className="max-w-screen-xl text-sm text-white mx-auto flex items-center justify-center  space-x-8 font-bold  ">
          <Link
            className="!hidden  lg:!block   cool-link  navlink font-semibold   hover:text-pink "
            href={"/"}
          >
            HOME
          </Link>
          <Dropdown
            drophover={true}
            buttonStyle={"!bg-red !border-none !px-0 !py-0 text-white"}
            title="ABOUT US"
            options={[
              "About Us",
              "Trademarks & Copyrights",
              "Free Family Legal Advice",
              "Our Vision",
              "We Care",
              "Why Us",
              "Leadership",
              "Authentic Profile",
              "Rishta Services",
              "Support a Marriage",
              "Special Cases",
              "Safety and Security",
              "Career",
              "Hire Consultant",
              "Our Affiliates",
              "Brides Guide",
              "Groom guide",
              "Blog",
            ]}
          />

          <Link
            href={"/search"}
            className="!hidden  lg:!block   cool-link  navlink font-semibold   hover:text-pink "
          >
            SEARCH
          </Link>
          <Link
            href={"/Best-proposals"}
            className="!hidden  lg:!block   cool-link  navlink font-semibold   hover:text-pink "
          >
            BEST PROPOSALS
          </Link>
          <Link
            href={"/abroad-proposal"}
            className="!hidden  lg:!block   cool-link  navlink font-semibold   hover:text-pink "
          >
            ABROAD PROPOSAL
          </Link>
          <Link
            href={"/matrimonial"}
            className="!hidden  lg:!block   cool-link  navlink font-semibold   hover:text-pink "
          >
            ELITE MATRIMONIAL
          </Link>
          <Link
            href={"/events"}
            className="!hidden  lg:!block   cool-link  navlink font-semibold   hover:text-pink "
          >
            EVENTS{" "}
          </Link>
          <Link
            href={"/contact"}
            className="!hidden  lg:!block   cool-link  navlink font-semibold   hover:text-pink "
          >
            CONTACT US
          </Link>
        </div>

        <div
          className={`w-full md:hidden ${isNavOpen ? "block" : "hidden"}`}
          id="navbar-solid-bg"
        >
          <div className="flex flex-col font-bold opacity-80 mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            <Link href={"/"}>
              <p
                className="gap-2 font-bold opacity-80 py-2  md:p-0 flex flex-row  text-primary rounded md:bg-transparent md:text-blue-700 "
                aria-current="page"
              >
                <Image
                  src={"/icons/usericon.svg"}
                  className=""
                  width={10}
                  height={10}
                  sizes={"100vw"}
                  alt="User Icon"
                />
                Sign in
              </p>
            </Link>
            <Link href={"/Addlisting"}>
              <p className="block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary">
                Post Business Card
              </p>
            </Link>
            <Link href={"/account"}>
              <p className="block font-bold opacity-80 py-2 cool-link navlink  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary">
                For employers
              </p>
            </Link>
            <Link href={"/"}>
              <p className=" py-2  md:p-0 cool-link navlink font-bold opacity-80 text-gray-900 rounded  md:hover:bg-transparent md:border-0 hover:text-primary ">
                Find Company
              </p>
            </Link>

            <Link href={"/explore"}>
              <p className=" py-2   md:p-0 cool-link navlink font-bold opacity-80 text-gray-900 rounded  md:hover:bg-transparent md:border-0 hover:text-primary">
                News
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
