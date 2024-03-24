import React from "react";
import Button from "../ui/button";
import Image from "next/image";
function Getnow({ description, image }) {
  return (
    <div    className="bg-red">
      <div className="max-w-screen-xl grid grid-cols-3  items-center gap-6 mx-auto py-8">
        <div data-aos-delay={"450"}
    data-aos="fade-right" className="space-y-4  col-span-2">
          <h1 className="text-white font-medium text-[35px]">{description}</h1>
          <Button className="border-white text-white !mt-10 !py-4 !px-10">
            Register Now
          </Button>
        </div>
        <Image
        data-aos-delay={"450"}
        data-aos="fade-left"
          src={`/landing/${image}`}
          width={0}
          height={0}
          className="w-full"
          sizes="100vw"
          alt="cerficateimg"
        />
      </div>
    </div>
  );
}

export default Getnow;
