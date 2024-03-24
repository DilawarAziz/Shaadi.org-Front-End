import React from 'react'
import Dropdown from "@/components/ui/custom-dropdown";
function Personalinfo() {
  return (
    <div className="p-5">
    <div className="flex flex-col space-y-4 ">
      <Dropdown
        buttonStyle={"border border-gray-500 !rounded-none  "}
        name="Country"
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        name="State"
        buttonStyle={"border border-gray-500 !rounded-none  "}
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        buttonStyle={"border border-gray-500 !rounded-none  "}
        name="City"
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        buttonStyle={"border border-gray-500 !rounded-none  "}
        name="Country"
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        name="State"
        buttonStyle={"border border-gray-500 !rounded-none  "}
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
      <Dropdown
        buttonStyle={"border border-gray-500 !rounded-none  "}
        name="City"
        title="Select"
        options={["About Us", "Brides Guide", "Groom guide", "Blog"]}
      />
    </div>
  </div>
  )
}

export default Personalinfo