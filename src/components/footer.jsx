import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-red py-20">
      <div className="max-w-screen-xl !text-white mx-auto">
        <h1 className="text-4xl font-bold">
          Marriages are Made In Heaven But <br /> are Celebrated On Earth.
        </h1>
        <div className="grid-cols-5 grid mt-20">
          <div className="col-span-2 space-y-4">
            <Image
              src={"/landing/logo-footer.svg"}
              width={0}
              height={0}
              className="w-full  "
              sizes="100vw"
              alt="cerficateimg"
            />
            <p>
              In truth, this precious bond between two individuals is what
              brings the peace and happiness in human kind. The ultimate
              happiness of finding and living with the right person is almost
              divine.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5, 6, 7].map((items, index) => (
                <FaInstagram key={index} size={30} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-xl font-bold">Company</h1>
            {[
              "Trademarks & Copyrights",
              "Social Connections",
              "Media Room",
              "FAQs",
              "Contact Us",
              "Career",
            ].map((items, index) => (
              <p key={index}>{items}</p>
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-xl font-bold">Company Policies</h1>
            {[
              "Privacy Policy   ",
              "Terms of Services",
              "Picture Policy",
              "Disclaimer",
              "Report Misuse",
              "Safety Tips",
            ].map((items, index) => (
              <p key={index}>{items}</p>
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-xl font-bold">Get in Touch with Us</h1>
            {[
              "B-83, Block 10, Gulshan-e-Iqbal, Karachi, Pakistan",
              "Office A, 1st Floor, JF Business Bay, Block D, North Nazimabad, Karachi, Sindh, Pakistan.",
              "Suite # 202, 2nd Floor, Platinum Avenue, Plot # 41/C, Street # 9, Bukhari Commercial, Phase VI, DHA, Karachi.",
              "info@shaadi.org.pk",
            ].map((items, index) => (
              <div key={index} className="flex items-center gap-4">
                <p className="w-6">
                  <FaLocationDot size={20} />
                </p>
                <p>{items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-b border-white border-dashed py-2 mb-6 mt-10" >
        <div className="flex items-center max-w-screen-xl mx-auto justify-between">
          {[1, 2, 3, 4].map((items, index) => (
            <p key={index} className="text-white flex items-center gap-2">
              <FaPhoneAlt />
              DHA Landline: +92-213-5243786
            </p>
          ))}
        </div>
      </div>
      <div>
        <div className="max-w-screen-xl !text-sm text-center mx-auto text-white">
        
          <div className="grid grid-cols-8 items-center ">
            <div >
              <p>Shaadi Organization® </p>
              <p>Pakistan - © 2024 All Rights Reserved</p>
            </div>
            <div className="col-span-6 space-y-4">
            <p>
            Shaadi Organization® Pakistan - Shaadi.org.pk - The Most Trusted
            Matrimonial Service in Pakistan © 2024 All Rights Reserved.
          </p>
              <p>
                Trademarks & Copyrights: www.shaadi.org.pk®, Shaadi
                Organization®, ®شادی آرگنائزیشن, The Most Trusted Matrimonial
                Service in Pakistan®, ®پاکستان کی سب سے بھروسہ مند رشتہ سروس,
                Grand Matchmaking Event® and several others are all Trademarks
                of Shaadi Organization® Pakistan and also protected by the
                Copyrights laws of Pakistan. No one is allowed to use the
                above-mentioned trademarks, copyrights, licenses, our name, logo
                or slogans without our written permission.
              </p>
              <p>
                "We hereby declare that Shaadi.org.pk@ website is not a dating
                website and it is strictly for matrimonial purpose only."
              </p>
            </div>
            <div>
              <p>Made with ♥ by Best Digital Media Marketing Agency.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
