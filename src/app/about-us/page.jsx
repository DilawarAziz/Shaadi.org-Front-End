import React from "react";
import Image from "next/image";

function Page() {
  return (
    <div className="py-8">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white col-span-3 border">
            <h1 className="text-white bg-red text-xl font-medium px-4 py-2">
              Pakistan’s Most Trusted Matchmakers At Your Service
            </h1>
            <div className="px-4">
              <p className="my-2">
                In truth, this precious bond between two individuals is what
                brings the peace and happiness in human kind. The ultimate
                happiness of finding and living with the right person is almost
                divine. To share every thought without words, to feel every
                emotion mutually, to celebrate mental and spiritual connection
                is a thing of rarity. In our society, young men and women are
                not allowed to choose their own life partners and matchmaking
                for marriages is initiated by the elders of the family. It is
                considered close to almost indecent for wishing to even take a
                look at the bride/groom before marriage. And thus, we witness an
                element of frustration building in couples nowadays.
              </p>
            </div>
          </div>
          <div className="p-5  bg-white border    ">
            <Image
              src={"/landing/Rishtay-Pakistani-Elite-Matrimonial-Service.jpg"}
              width={0}
              height={0}
              className="w-full "
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
        </div>
        <div className="">
          <div className="bg-white col-span-3 border">
            <h1 className="text-white bg-red text-xl font-medium px-4 py-2">
              Pakistan’s Most Trusted Matchmakers At Your Service
            </h1>
            <div className="p-4 space-y-4">
              {[1,2,3,4,5,6].map((_,index)=>(
              <p key={index} className="my-2">
              Find your fairy tale ending by selecting the perfect partner from Pakistan and abroad. Simply create an account on Shaadi.org.pk to get online rishtey where your potential ideal life partner is just a few clicks away. Once you are registered with us, you just need to log on to the website, create your own profile and specify your required qualities in the prospect bride or groom.
              </p>
              ))}
            </div>
          </div>
        
        </div>
        <div className="">
          <div className="bg-white col-span-3 border">
            <h1 className="text-white bg-red text-xl font-medium px-4 py-2">
              Pakistan’s Most Trusted Matchmakers At Your Service
            </h1>
            <div className="p-5     ">
            <Image
              src={"/landing/shaadi-organization-pakistan-organizational-structure.jpg"}
              width={0}
              height={0}
              className="w-full "
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          </div>
        
        </div>
        <div>
       
        </div>
      </div>
    </div>
  );
}

export default Page;
