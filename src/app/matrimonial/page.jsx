import React from "react";
import Image from "next/image";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Button from "@/components/ui/button";

function Page() {
  return (
    <div className="bgwhite py-8 ">
      <div className="max-w-screen-xl mx-auto ">
        <h1 className="text-4xl font-bold  text-center mt-6 ">
          Elite Matrimonial
        </h1>
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
        <p className="text-center mb-6">
          A Special Matrimonial Service Just for The Elite Class.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-10 flex flex-col gap-10 bg-white border ">
            <h1 className="text-3xl font-bold">
              Find your ideal partner in your class.
            </h1>
            {[1, 23, 4, 5].map((_, index) => (
              <div className="flex gap-3 items-center" key={index}>
                <AiOutlineSafetyCertificate size={70} className="!text-red" />
                <div>
                  <h1 className="text-semibold text-xl">
                    Personalized Matchmaking Service
                  </h1>
                  <p className="">
                    A dedicated experienced matchmaking consultant will work for
                    you one to one.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-10 flex flex-col gap-10 bg-white border h-[fit-content] ">
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
        <h1 className="text-4xl font-bold  text-center mt-6 ">
          Shaadi Organization® Pakistan
        </h1>
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
        <p className="text-center mb-6">
          The Most Trusted Matrimonial Service in Pakistan
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-10 flex flex-col gap-10 bg-white border    ">
            <Image
              src={"/landing/Rishtay-Pakistani-Elite-Matrimonial-Service.jpg"}
              width={0}
              height={0}
              className="w-full "
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <div className="p-10 flex flex-col gap-6 bg-white border ">
            <h1 className="text-3xl font-bold">
              Find your ideal partner in your class.
            </h1>
            {[1, 23, 4, 5].map((_, index) => (
              <div className="flex  items-center" key={index}>
                <p className="">
                  If you want to spend the rest of your life with a celebrity, a
                  high official or a member of a royal family, you have landed
                  on the right page
                </p>
              </div>
            ))}
          </div>
        </div>
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className={`mt-10`}>
            <h1 className="text-4xl font-bold  text-center mt-6 ">Royal</h1>
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
            <div
              dir={`${index % 2 ? "rtl" : "ltr"}`}
              className="grid grid-cols-2 d  gap-6"
            >
              <div className="p-10 flex flex-col gap-10 bg-white border justify-center items-center    ">
                <Image
                  src={
                    "/landing/Rishtay-Pakistani-Elite-Matrimonial-Service.jpg"
                  }
                  width={0}
                  height={0}
                  className="w-full "
                  sizes="100vw"
                  alt="cerficateimg"
                />
              </div>

              <div className="p-10 flex flex-col gap-6 bg-white border ">
                <h1 className="font-bold text-4xl">
                  Find an Overseers Life Partner (Abroad/Foreign Proposals)
                </h1>
                <p className="">
                  A lot of people search for highly educated, well-settled, and
                  like-minded partners from the same ethnicity, culture, and
                  religion, who also live abroad. If you live in Pakistan and
                  long to marry someone who belongs to a particular kind of
                  family or ethnicity and is settled abroad, we, at Elite
                  Matrimonial Service, are ready to assist you in finding that
                  special someone. We focus on serving all candidates who are
                  interested in marrying someone who lives overseas based on
                  their unique preferences. The services our experienced
                  marriage consultants are going to offer you will exceed your
                  greatest expectations and you will be able to settle down in
                  absolutely no time at all.
                </p>
                <div>
                  <Button>Call Us Now</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <h1 className="text-4xl font-bold  text-center mt-10 ">
          Elite Matrimony Benefits
        </h1>
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
        <div className="bg-white p-16">
          <ol className=" space-y-1 list-disc">
            <li> Dedicated Female Matchmaker</li>
            <li>100% Private & Confidential Matrimonial Service</li>
            <li>Specially designed doorstep Service</li>
            <li>Permanent Membership of Elite Class Matrimonial Service</li>
            <li>
              Dedicated female matchmaker will do both sides communication to
              ensure your success. Elite Gold
            </li>
            <li>
              Specially designed extra efforts and direct meetings to show you
              more profiles. Elite Gold
            </li>
          </ol>
        </div>
        <div className="w-1/2 mx-auto border bg-white p-8 space-y-4 mt-10">
          <h1 className="text-4xl font-bold  text-center mt-10 ">
            Elite Matrimony Benefits
          </h1>
          <div className="w-[80%]   mx-auto">
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full "
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300"
          />
          <input
            type="text"
            placeholder="Moblie Number"
            className="w-full p-4 border border-gray-300"
          />
          <input
            type="text"
            placeholder="Email Addres"
            className="w-full p-4 border border-gray-300"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type Your Message"
            className="w-full p-4 border border-gray-300"
          ></textarea>
          <div className="flex flex-col gap-4">

          <Button>Submit</Button>
          <Button>OR direct wattsapp +923857893246</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
