import React from 'react'
import Button from "@/components/ui/button";
import Checkbox from '@/components/forms/checkbox'
import Dropdown from "@/components/ui/custom-dropdown";

function Quicksearch() {
  const ageArray = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <div className='p-5'>
        <div className='grid grid-cols-2 gap-2'>
            <Button className={"hover:!scale-100 !px-4 !w-full"}>Male</Button>
            <Button className={"hover:!scale-100 !px-4 !w-full"}>Female</Button>
        </div>
        <div className='space-y-2 my-4'>
          <Checkbox title={"Only Featured Profiles"}/>
          <Checkbox title={"Only Verified Profiles"}/>
          <Checkbox title={"Second Marriage"}/>
          <Checkbox title={"Divorced Marriage"}/>
        </div>
        <hr className='border-t border-black'/>
          <h1 className='font-bold text-red mt-3'>
          Members Type
          </h1>
        <div className='flex justify-between items-center '>
          <div className='space-y-2 my-4'> 
          <Checkbox title={"Free"}/>
          <Checkbox title={"Basic"}/>
          <Checkbox title={"Bronze"}/>
          <Checkbox title={"Silver"}/>
          <Checkbox title={"Elite"}/>
          </div>
          <div className='space-y-2 my-4'>
          <Checkbox title={"Gold"}/>
          <Checkbox title={"Diamond"}/>
          <Checkbox title={"Platinum"}/>
          <Checkbox title={"Foreign"}/>
          <Checkbox title={" V.I.P"}/>
          </div>
        </div>
        <hr className='border-t border-black  mb-4'/>
        <div className='grid grid-cols-2 gap-2 w-full'>


        <Dropdown
            buttonStyle={"border border-gray-500 !rounded-none  "}
            name="Age From"   title="Select"
            options={ageArray}
          />
        <Dropdown
            buttonStyle={"border border-gray-500 !rounded-none  "}
            name="Age To"    title="Select"
            options={ageArray}
          />
        </div>
        <div className='flex flex-col space-y-4 mt-4'>
        <Dropdown
            buttonStyle={"border border-gray-500 !rounded-none  "}
            name="Country"  title="Select"
            options={[
              "About Us",
              "Brides Guide",
              "Groom guide",
              "Blog",
            ]}
          />
           <Dropdown
           name="State"
            buttonStyle={"border border-gray-500 !rounded-none  "}
            title="Select"
            options={[
              "About Us",
              "Brides Guide",
              "Groom guide",
              "Blog",
            ]}
          />
           <Dropdown
            buttonStyle={"border border-gray-500 !rounded-none  "}
            name="City"     title="Select"
            options={[
              "About Us",
              "Brides Guide",
              "Groom guide",
              "Blog",
            ]}
          />
        </div>
    </div>
  )
}

export default Quicksearch