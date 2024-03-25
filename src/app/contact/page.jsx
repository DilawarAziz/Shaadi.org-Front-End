import React from "react";
import Image from "next/image";
import Button from "../../components/ui/button";
function Page() {
    const contacts = [
        { name: 'Mrs. Ali', phone: '+923452444262' },
        { name: 'Mrs. Syed', phone: '+923460025624' },
        { name: 'Mrs. Shah', phone: '+923331362601' },
        { name: 'Mrs. Farooqui', phone: '+923344444962' },
        { name: 'Mrs. Siddiqui (Cell)', phone: '+923488800022' },
        { name: 'Mrs. Siddiqui (Whatsapp)', phone: '+923362007860' },
        { name: 'Mrs. Hashmi', phone: '+923102658315' },
        { name: 'Mrs. Ansari', phone: '+923468218988' },
        { name: 'Mrs. Shahid', phone: '+923462141786' },
        { name: 'Mrs. Ahmed', phone: '+923468217988' },
        { name: 'Ms. Maryam', phone: '+923458205861' },
        { name: 'Mrs. Arain', phone: '+923428504242' },
        { name: 'Ms. Farah', phone: '+923491007313' },
        { name: 'Mrs. Brohi', phone: '+923488800889' },
        { name: 'Ms. Anila', phone: '+923491007316' },
        { name: 'Mrs. Khan', phone: '+923432435092' },
        { name: 'Ms. Fariha', phone: '+923491007310' },
        { name: 'Ms. Hina', phone: '+923491007101' },
        { name: 'Ms. Salma', phone: '+923309976705' },
        { name: 'Ms. Pirzada', phone: '+923488800021' },
      ];
  return (
    <div className="py-8 bgwhite">
        <div className="max-w-screen-xl mx-auto my-10">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7241.607507222734!2d66.907862!3d24.836384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338caa499dcc7%3A0x620468db22f4cf7f!2sShaadi.org.pk%2C%20Marriage%20Bureau%2C%20Rishta%20Pakistan%2C%20Matrimony%2C%20Karachi%20Lahore%20Islamabad!5e0!3m2!1sen!2sus!4v1711298843628!5m2!1sen!2sus" className="w-full h-[200px] border-4 rounded-xl border-red" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      <h1 className="text-4xl font-bold  text-center mt-4">
        Hire Personal Matchmaking Consultant
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
        <p className="text-xl text-center">
          Please send your complete details & requirements on the following
          WhatsApp numbers.
        </p>
        <div className="max-w-screen-xl mx-auto mt-10">
            <div className="grid grid-cols-2 gap-10">
                <div className="bg-white ">
                    <h1 className="text-white bg-red text-xl font-medium p-4">Pakistan</h1>
                    {contacts.map((items,index)=>(
                        <div key={index} className="px-4">
                            <h1 className="my-2">{items.name}<span className="text-red text-[16px] ">{items.phone}</span></h1>
                        </div>
                    ))}
                </div>
                <div className="space-y-10">

                <div className="bg-white ">
                    <h1 className="text-white bg-red text-xl font-medium p-4">Pakistan</h1>
                    {contacts.slice(0,12).map((items,index)=>(
                        <div key={index} className="px-4">
                            <h1 className="my-2">{items.name}<span className="text-red text-[16px] ">{items.phone}</span></h1>
                        </div>
                    ))}
                </div>
                <div className="bg-white ">
                    <h1 className="text-white bg-red text-xl font-medium p-4">International</h1>
                    {contacts.slice(0,4).map((items,index)=>(
                        <div key={index} className="px-4">
                            <h1 className="my-2">{items.name}<span className="text-red text-[16px] ">{items.phone}</span></h1>
                        </div>
                    ))}
                </div>
                </div>

            </div>

        </div>
    </div>
  );
}

export default Page;
