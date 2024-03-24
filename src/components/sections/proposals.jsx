import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../ui/button";

function Proposals({ title }) {
  return (
    <div   className="space-y-3 ">
      <h1 className="text-4xl font-bold  text-center ">{title}</h1>
      <div className="w-[30%]   mx-auto ">
        <Image
          src={"/landing/shaadi-organization-pakistan-heading-border.png"}
          width={0}
          height={0}
          className="w-full "
          sizes="100vw"
          alt="cerficateimg"
        />
      </div>

      <div className="grid grid-cols-3  gap-10 ">
        {[400,500,600].map((items, index) => (
          <div  data-aos-delay={"500"}
          data-aos={`fade-${index===0 ? "right" : index===1 ? "up" : index===2 ? "left" : ""}`}
 className="p-4 flex items-center gap-4  shadow-xl   !bg-white rounded-xl !rounded-tl-none">
            <div className="relative">
              <Image
                src={"/landing/default-image.jpg"}
                width={0}
                height={0}
                className="w-[100%] mx-auto rounded-full"
                sizes="100vw"
                alt="cerficateimg"
              />
              <div className="bg-[#008000] absolute bottom-0 rounded-full h-10 w-10 flex items-center justify-center">
                <FaPhoneAlt className="text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-red font-semibold text-xl">
                Mehwish Hyderabadi
              </h1>
              <div className="flex gap-2 items-center text-sm font-semibold">
                <FaUser className="text-gray-500" />
                <p>34 Years</p>
              </div>
              <div className="flex gap-2 items-center text-sm font-semibold">
                <FaUser className="text-gray-500" />
                <p>Accountant</p>
              </div>
              <div className="flex gap-2 items-center text-sm font-semibold">
                <FaUser className="text-gray-500" />
                <p>pakistan</p>
              </div>
              <button className="bg-[#3daee6] text-sm py-1 shadow-sm shadow-[#3daee6] rounded-[6px] text-white px-4">
                Profile Detail
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 ">
        <Button> Veiw More</Button>
      </div>
    </div>
  );
}

export default Proposals;
