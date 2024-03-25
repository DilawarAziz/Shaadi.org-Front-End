import React from "react";
import Accordion from "../../components/sections/accordion";
import Button from "../../components/ui/button";
import SearchCard from "../../components/cards/search-card";
import Image from "next/image";

function Page() {
  return (
    <div className="bgwhite pb-10 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10">
        <div className="p-6 rouded-xl mt-3 overflow-hidden  bg-white shadow-lg shadow-gray-500 h-[fit-content]">
          <Accordion />
          <div className="grid grid-cols-2  gap-2 p-5">
            <Button className="border-red text-red !px-0 !w-full">Search</Button>
            <Button className="border-red text-red !px-0 !w-full">Reset</Button>
          </div>
        </div>
        <div className="col-span-3 ">
          <h1 className="text-4xl font-bold  text-center mt-4">Search</h1>
          <div className="w-[30%]   mx-auto">
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full "
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <div className="flex flex-col  gap-6 my-10">
            {Array.from({ length: 20 }, (_, index) => (
              <SearchCard key={index} />
            ))}
          </div>
          <div className="flex justify-center">
          <Button>Load More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
