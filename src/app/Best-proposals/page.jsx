import React from "react";
import SearchVerticalCard from "../../components/cards/search-vertical-Card";
import Image from "next/image";
import Button from "../../components/ui/button";
import Dropdown from "../../components/ui/custom-dropdown";

function page() {
  return (
    <div className="bgwhite py-8 ">
      <div className="max-w-screen-xl mx-auto ">
        <h1 className="text-4xl font-bold  text-center mt-6 ">
          Best Pakistani & Abroad Proposals
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
        <div className="flex flex-col gap-6">
        <div className="grid grid-cols-5  gap-4 ">
      <Dropdown
        buttonStyle={"border border-gray-500 !rounded-lg "}
        name="Country"
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        name="State"
        buttonStyle={"border border-gray-500 !rounded-lg "}
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        buttonStyle={"border border-gray-500 !rounded-lg "}
        name="City"
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        buttonStyle={"border border-gray-500 !rounded-lg "}
        name="Country"
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        name="State"
        buttonStyle={"border border-gray-500 !rounded-lg "}
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
     
      <Dropdown
        buttonStyle={"border border-gray-500 !rounded-lg "}
        name="Country"
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        name="State"
        buttonStyle={"border border-gray-500 !rounded-lg "}
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        buttonStyle={"border border-gray-500 !rounded-lg "}
        name="City"
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        buttonStyle={"border border-gray-500 !rounded-lg "}
        name="Country"
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
    
    <div className="flex  items-end gap-3">
            <Button className="border-red text-red">Search</Button>
            <Button className="border-red text-red">Reset</Button>
          </div>
    </div>
        </div>
        <div className="grid grid-cols-3 gap-6 my-4">
          {Array.from({ length: 9 }, (_, index) => (
            <SearchVerticalCard key={index} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button>Load More</Button>
        </div>
      </div>
    </div>
  );
}

export default page;
