import React from "react";
import Image from "next/image";
import Button from "../components/ui/button";
function Page() {
  return (
    <div className="bgwhite py-8">
      <div className="max-w-screen-xl mx-auto space-y-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <div key={index} className="bg-white  px-4 py-8 space-y-4 rounded-2xl">
            <h1 className="text-3xl text-yellow text-center">
              Jashne Baharaan Event – Pavilion End Club (08th March, 2015)
            </h1>
            <div className="grid grid-cols-6 gap-6  rounded-xl">
              {[1, 2, 3, 4, 5, 6, ].map((_, index) => (
                <Image
                  key={index}
                  src={"/landing/rishtay-pakistani-shaadi-ka-laddu-7-1.jpg"}
                  width={0}
                  height={0}
                  className="w-full rounded-xl"
                  sizes="100vw"
                  alt="cerficateimg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
