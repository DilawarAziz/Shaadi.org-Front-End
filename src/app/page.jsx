import NavBar from "@/components/header/header";
import Button from "@/components/ui/button";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { CiGlobe } from "react-icons/ci";
import Proposals from "@/components/sections/proposals";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Getnow from "@/components/sections/getnow";
export default function Home() {
  return (
    <main>
      <div className="relative flex items-center justify-center">
        <video className="w-full" autoPlay loop muted playsInline>
          <source
            src="/videos/Shaadi-Organization-Teaser.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="max-w-screen-xl mx-auto absolute w-full grid-cols-2 ">
          <div className="text-white space-y-6">
            <h1 className="text-6xl font-bold">Pakistans Number One  <br/> Trusted Organization</h1>
            <p className="font-2xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing aspernatur .<br/> Nesciunt
              aspernatur quia commodi nisi sapiente dolor
            </p>
            <div className="flex gap-4">
              <Button type={"white"}>Register Now</Button>
              <Button type={"white"}>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-redLight space-y-2 py-3 font-bold text-xl  overflow-hidden">
        <h1 className="animate-slide flex items-center text-nowrap text-red ">
          Careful! Always contact on the official WhatsApp Numbers which are
          mentioned on our website to protect
          <span className="text-yellow">
            {" "}
            yourself from Fake People / Websites.
          </span>
        </h1>
        <h1 className="animate-reverseSlide duration-10 !duration-1000 flex items-center text-yellow ">
          ہوشیار! اپنے آپ کو جعلی لوگوں/ویب سائٹس سے بچانے کے لیے ہمیشہ آفیشل
          واٹس ایپ نمبرز پر رابطہ کریں جن کا{" "}
          <span className="text-red">ذکر ہماری ویب سائٹ پر کیا گیا ہے۔</span>
        </h1>
      </div>
      <div className="bg-red py-8">
        <div className="  text-center max-w-screen-xl mx-auto space-y-4">
          <h1
            data-aos-delay="400"
            data-aos="fade-up"
            className="text-3xl font-bold text-white"
          >
            Government Registered Marriage Bureau
          </h1>
          <div
            data-aos-delay="500"
            data-aos="fade-up"
            className="w-[30%] mx-auto "
          >
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>

          <h2
            data-aos-delay="600"
            data-aos="fade-up"
            className="text-xl font-bold text-yellow"
          >
            Trademarks, Copyrights, Government&apos;s License & Certificates
          </h2>
          <p
            data-aos-delay="400"
            data-aos="fade-up"
            className="w-[90%] mx-auto text-white"
          >
            Shaadi Organization® Pakistan is a licensed, registered, and
            recognized marriage bureau from the Government of Pakistan. Our
            name, logo, events&apos; name, and taglines are all registered under the
            Trademark and Copyright Acts of the Government of Pakistan. We are
            also registered and associated with a number of local, provincial,
            and federal departments of the Government of Pakistan, media
            personalities, and media channels. You can see Trademarks,
            Copyrights, Government&apos;s License & Certificates on the link below.
          </p>
          <div className="grid grid-cols-5 gap-8">
            {[300, 400, 500, 600, 700].map((items, index) => (
              <Image
                data-aos-delay={items}
                data-aos="fade-up"
                key={index}
                src={"/landing/Shaadi-Org-Pk-Trademark-1.jpg"}
                width={0}
                height={0}
                className="w-full h-full"
                sizes="100vw"
                alt="cerficateimg"
              />
            ))}
          </div>
          <Button type={"white"} className={" !mt-10"}>
            View All Certificates
          </Button>
        </div>
      </div>
      <div className="bg-redLight py-8">
        <div className="grid grid-cols-2 max-w-screen-xl mx-auto  gap-10 items-center">
          <div
            data-aos-delay={"400"}
            data-aos="fade-right"
            className="w-[70%] space-y-4"
          >
            <p className="text-xl text-red font-semibold">
              Shaadi Organization® Pakistan
            </p>
            <h1 className="text-4xl font-bold">
              The Most Trusted Marriage Bureau in Pakistan
            </h1>
            <p>
              Shaadi.org.pk was established in 2003 and is a licenced,
              government compliant marriage bureau that operates by a strict
              code of conduct.
            </p>
            {[
              "Always Speak Truth.",
              " Always Keep Your Promise.",
              "Always Proves to be Honest.",
              " Always Guide with Sincerity / Properly / through the Heart ",
              "Always Search Proposal for the Clients as if They are Our Brothers, Sisters, Sons & Daughters.",
            ].map((items, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-4 h-4 flex items-center justify-center bg-red rounded-full">
                  <TiTick color="white" size={10} />
                </div>
                <p>{items}</p>
              </div>
            ))}
            <Button className={" !mt-10"}>Register Now</Button>
          </div>
          <div data-aos-delay={"400"} data-aos="fade-left">
            <Image
              src={"/landing/rishtay-pakistan-mrs-ali-dr-arif-alvi.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
        </div>
      </div>
      <div className="bg-red py-8">
        <div className="grid grid-cols-2 max-w-screen-xl mx-auto  gap-10 items-center">
          <div
            data-aos-delay={"400"}
            data-aos="fade-right"
            className="w-[70%] space-y-4 text-center  mx-auto"
          >
            <h1 className="text-4xl font-bold text-white">Shaadi Ka Laddu</h1>
            <div className="w-[80%] mx-auto ">
              <Image
                src={"/landing/shaadi-organization-pakistan-heading-border.png"}
                width={0}
                height={0}
                className="w-full"
                sizes="100vw"
                alt="cerficateimg"
              />
            </div>
            <p className="text-yellow text-xl font-semibold">
              Success of our Events
            </p>
            <h2 className="text-white font-bold">
              Direct Family-to-Family Rishta Meeting Event
            </h2>
            <p className="text-yellow font-bold text-3xl ">
              Shaadi Organization® Pakistan proudly presents Shaadi Ka Laddu
            </p>
            <p className="text-2xl text-white font-bold">
              Our renowned matchmaking event connects families directly in
              search of meaningful Relationships.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-[#e6ba2f] py-3 px-5  rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-yellow text-green-600 font-semibold">
                Past Seasons
              </button>
              <button className="bg-[#00a91c] rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-600 py-3 px-5  text-white font-semibold">
                Join Our Channels
              </button>
            </div>
          </div>
          <div
            data-aos-delay={"400"}
            data-aos="fade-left"
            className="video-responsive"
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kNFegah4qIQ?si=7A3e7fE7I5DDdlOI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-white py-8">
        <div className=" max-w-screen-xl mx-auto text-center   items-center">
          <h1
            data-aos-delay={"400"}
            data-aos="fade-up"
            className="text-4xl font-bold   "
          >
            Shaadi Ka Laddu
          </h1>
          <div
            data-aos-delay={"450"}
            data-aos="fade-up"
            className="w-[30%] mx-auto "
          >
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <p
            data-aos-delay={"500"}
            data-aos="fade-up"
            className="text-red font-semibold text-xl"
          >
            We do not hide behind WhatsApp. We are real matchmakers. We have{" "}
            <br /> proper offices, where we sit 7 days a week and 12 hours a day
            to meet <br /> people and help in marriage proposals.
          </p>
          <div
            data-aos-delay={"550"}
            data-aos="fade-up"
            className="shadow-xl relative h-[300px] mt-[200px] flex items-center justify-center  w-[380px] p-4 mx-auto rounded-xl"
          >
            <Image
              src={"/landing/default-image.jpg"}
              width={0}
              height={0}
              className="w-[80%]  rounded-full absolute top-[-50%] "
              sizes="100vw"
              alt="cerficateimg"
            />
            <div className="mt-auto h-full flex flex-col justify-end">
              <h1 className="text-red text-2xl font-bold">Mrs. Ali</h1>
              <p className="text-gray-500 font-semibold">
                Director, Shaadi Organization® Pakistan
              </p>
              <h1>Sr. Consultant & Matchmaker for Elite & Upper Class</h1>
            </div>
            <button className="bg-red absolute -bottom-6 px-6 py-2 rounded-lg text-white text-sm font-semibold">
              Contact
            </button>
          </div>
          <h1 className="text-3xl mt-10 font-bold">Our Team</h1>
          <Image
            src={"/landing/shaadi-organization-pakistan-heading-border.png"}
            width={0}
            height={0}
            className="w-[20%] mx-auto"
            sizes="100vw"
            alt="cerficateimg"
          />
          <p className="text-xl text-red font-semibold">
            Contact us for the Personalized Matchmaking
          </p>
        </div>
        <div className="grid grid-cols-6 items-center  gap-6 max-w-screen-xl mx-auto mb-8">
          {[
            300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900,
            950, 1000, 1050,
          ].map((items, index) => (
            <div
              data-aos-delay={items}
              data-aos="fade-up"
              key={index}
              className="shadow-xl relative flex justify-center flex-col items-center w-full   p-4 mx-auto rounded-xl"
            >
              <Image
                src={"/landing/default-image.jpg"}
                width={0}
                height={0}
                className="w-[50%] mx-auto rounded-full"
                sizes="100vw"
                alt="cerficateimg"
              />
              <h1 className="text-red text-2xl  font-bold mt-8">Mrs. Ali</h1>

              <button className="bg-red absolute -bottom-6 px-3  py-1 rounded-lg text-white text-sm font-semibold">
                Contact
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-red py-9">
        <div className="max-w-screen-xl mx-auto  ">
          <div
            data-aos-delay={"400"}
            data-aos="fade-up"
            className="bg-white rounded-xl p-8 space-y-4"
          >
            <h1 className="font-bold text-3xl">Rishta Services</h1>
            <p>
              Shaadi.org.pk website is Rishta Pakistani website based on
              self-service basis i.e. Do It Yourself basis or Find Rishta
              Yourself.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-20 mt-10">
            {[400, 450, 500, 550].map((items, index) => (
              <div
                data-aos-delay={items}
                data-aos="fade-up"
                key={index}
                className="bg-white rounded-xl p-8 flex flex-col items-center"
              >
                <div className="bg-red rounded-full w-[70px] h-[70px] flex items-center justify-center">
                  <CiGlobe size={60} color="white" className="bg-transparent" />
                </div>
                <p className="mt-4">Rishta Website</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button type={"white"}> Veiw More</Button>
          </div>
        </div>
      </div>
      <div className="bg-white py-8">
        <div className=" max-w-screen-xl mx-auto text-center   items-center">
          <h1
            data-aos-delay={"400"}
            data-aos="fade-up"
            className="text-4xl font-bold   "
          >
            Free Family Legal Advice Shaadi Ka Laddu
          </h1>
          <div
            data-aos-delay={"450"}
            data-aos="fade-up"
            className="w-[30%] mx-auto "
          >
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <p
            data-aos-delay={"500"}
            data-aos="fade-up"
            className="text-red font-semibold text-xl"
          >
            Free Family Legal Advice through Family Lawyers & Advocates
          </p>
          <div className="grid grid-cols-2 items-center gap-8 mt-8">
            <div
              data-aos-delay={"400"}
              data-aos="fade-right"
              className="!text-start space-y-4"
            >
              <p>
                Shaadi Organization® Pakistan is the first and only matrimonial
                organization in Pakistan, offering comprehensive free legal
                advice on all family matters to Pakistanis worldwide.
              </p>
              <p>
                Through our affiliation with Al Haqq Law Firm, our dedicated
                team of advocates, lawyers, and legal consultants ensures that
                you:
              </p>
              <ul>
                <li>♦ Connect with genuine families</li>
                <li>♦ Meet respectable and educated candidates</li>
                <li>
                  ♦ Receive support for family and candidate background checks
                </li>
                <li>
                  ♦ Get assistance with any other family-related legal issues
                </li>
              </ul>
              <p>
                Get in touch with our marriage bureau consultants or advocates,
                lawyers, and legal consultants at Al Haqq Law Firm to bring
                peace to your mind and life.
              </p>
              <h1 className="font-bold">
                Shaadi Organization® Pakistan & Al Haqq Law Firm – Committed to
                Making Your Life Better.
              </h1>
            </div>
            <div data-aos-delay={"400"} data-aos="fade-left">
              <Image
                src={
                  "/landing/shaadi-organization-pakistan-al-haqq-law-firm.jpg"
                }
                width={0}
                height={0}
                className="w-full rounded-xl"
                sizes="100vw"
                alt="cerficateimg"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button className={""}> Veiw More</Button>
          </div>
        </div>
      </div>

      <div className="bg-red py-8">
        <div className=" max-w-screen-xl space-y-6 mx-auto text-center   items-center">
          <h1
            data-aos-delay={"400"}
            data-aos="fade-right"
            className="text-4xl font-bold  text-white "
          >
            Celebrity Testimonials
          </h1>
          <div
            data-aos-delay={"400"}
            data-aos="fade-right"
            className="w-[30%] mx-auto "
          >
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <div
            data-aos-delay={"400"}
            data-aos="fade-right"
            className="grid grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((items, index) => (
              <Image
                key={index}
                src={
                  "/landing/shaadi-organization-pakistan-al-haqq-law-firm.jpg"
                }
                width={0}
                height={0}
                className="w-full "
                sizes="100vw"
                alt="cerficateimg"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-8 ">
        <div className=" max-w-screen-xl mx-auto text-center space-y-6  items-center">
          <h1 className="text-4xl font-bold   ">
            Grand Matchmaking Events Highlights
          </h1>
          <div className="w-[30%] mx-auto ">
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <p className="text-red font-semibold ">
            By the grace of Al Mighty Allah, Shaadi Organization® Pakistan
            successfully hosted 5th grand matchmaking event attended by 200+{" "}
            <br /> families and 500+ candidates. Please visit the link below to
            see event pictures.
          </p>
          <div
            data-aos-delay={"400"}
            data-aos="fade-right"
            className="grid grid-cols-6  gap-10"
          >
            {[12, 3, 4, 5, 6, 3].map((items, index) => (
              <div  key={index} className="over- overflow-hidden border-red border-4 rounded-tl-[50px] rounded-br-[50px]">
                <Image
                  src={"/landing/9980.jpg"}
                  width={0}
                  height={0}
                  className="w-full"
                  sizes="100vw"
                  alt="cerficateimg"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button className={""}> Veiw More</Button>
        </div>
      </div>
      <div className="bg-red py-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold  text-center ">Best Proposals</h1>
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
            <p className="text-white font-semibold text-xl text-center">
              See Best Pakistani & Abroad Proposals (Rishtay). Find Your Life
              Partner Fast & Easy
            </p>
            <div
              data-aos-delay={"400"}
              data-aos="fade-right"
              className="grid grid-cols-3  gap-10"
            >
              {[1, 2, 3].map((items, index) => (
                <div key={index} className="p-4 flex items-center gap-4 bg-white rounded-xl !rounded-tl-none">
                  <div className="relative">
                    <Image
                      src={"/landing/default-image.jpg"}
                      width={0}
                      height={0}
                      className="w-[100%] mx-auto rounded-full"
                      sizes="100vw"
                      alt="cerficateimg"
                    />
                    <div className="bg-[#008000] absolute bottom-0 rounded-full h-10 w-10 flex items-center justify-center">
                      <FaPhoneAlt className="text-white" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h1 className="text-red font-semibold text-xl">
                      Mehwish Hyderabadi
                    </h1>
                    <div className="flex gap-2 items-center text-sm font-semibold">
                      <FaUser className="text-gray-500" />
                      <p>34 Years</p>
                    </div>
                    <div className="flex gap-2 items-center text-sm font-semibold">
                      <FaUser className="text-gray-500" />
                      <p>Accountant</p>
                    </div>
                    <div className="flex gap-2 items-center text-sm font-semibold">
                      <FaUser className="text-gray-500" />
                      <p>pakistan</p>
                    </div>
                    <button className="bg-[#3daee6] text-sm py-1 shadow-sm shadow-[#3daee6] rounded-[6px] text-white px-4">
                      Profile Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button type={"white"}> Veiw More</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-8 flex justify-center ">
        <Image
          src={"/landing/Shaadi-Organization-Pakistani-Rishtay-Pattern.png"}
          width={0}
          height={0}
          className="w-full absolute top-0 left-0 h-full"
          sizes="100vw"
          alt="cerficateimg"
        />
        <div className="max-w-screen-xl space-y-10 z-10  ">
          <Proposals title={"USA Proposals"} />
          <Proposals title={"Canada Proposals"} />
        </div>
      </div>
      <div className="bg-red flex justify-center space-y-4 flex-col items-center pb-10">
        <div className="flex ">
          <Image
            src={"/landing/shaadi-organization-pakistan-perfect-match.png"}
            width={0}
            height={0}
            className="w-full "
            sizes="100vw"
            alt="cerficateimg"
          />
        </div>
        <h1 className="text-white font-medium text-[35px]">
          We Match Based on Compatibility, Not Just A Profile Picture
        </h1>
        <Button
          type={"white"}
          className="border-white text-white !mt-10 !py-4 !px-10"
        >
          Register Now
        </Button>
      </div>
      <div className="relative py-8 flex justify-center ">
        <Image
          src={"/landing/Shaadi-Organization-Pakistani-Rishtay-Pattern.png"}
          width={0}
          height={0}
          className="w-full absolute top-0 left-0 h-full"
          sizes="100vw"
          alt="cerficateimg"
        />
        <div className="max-w-screen-xl space-y-10 z-10">
          <Proposals title={"Featured Proposals "} />
          <Proposals title={"Verified Proposals"} />
        </div>
      </div>
      <div>
        <Getnow
          description={
            "In our personalized matchmaking service, you will deal directly with our knowledgeable, professional, and approachable Matchmakers who understand and uphold Islamic teachings and Eastern values."
          }
          image={
            "shaadi-organization-pakistan-In-personalized-matchmaking-you-will-deal-directly-min.png"
          }
        />
      </div>
      <div className="relative py-8 flex justify-center ">
        <Image
          src={"/landing/Shaadi-Organization-Pakistani-Rishtay-Pattern.png"}
          width={0}
          height={0}
          className="w-full absolute top-0 left-0 h-full"
          sizes="100vw"
          alt="cerficateimg"
        />
        <div className="max-w-screen-xl space-y-10 z-10">
          <Proposals title={"USA Proposals"} />
          <Proposals title={"Canada Proposals"} />
        </div>
      </div>
      <div>
        <Getnow
          description={
            "In our personalized matchmaking service, you will deal directly with our knowledgeable, professional, and approachable Matchmakers who understand and uphold Islamic teachings and Eastern values."
          }
          image={"shaadi-orginazation-pakistan-happy-client.png"}
        />
      </div>
      <div className="relative py-8 flex justify-center ">
        <Image
          src={"/landing/Shaadi-Organization-Pakistani-Rishtay-Pattern.png"}
          width={0}
          height={0}
          className="w-full absolute top-0 left-0 h-full"
          sizes="100vw"
          alt="cerficateimg"
        />
        <div className="max-w-screen-xl space-y-10 z-10 z-10">
          <Proposals title={"UK  Proposals"} />
          <Proposals title={"France / Italy / Spain / Germany Proposals"} />
        </div>
      </div>
      <div>
        <Getnow
          description={
            "We believe in the enduring love between husband and wife. Knowing our work makes a difference in so many lives brings us great joy."
          }
          image={
            "shaadi-organization-pakistan-In-personalized-matchmaking-you-will-deal-directly-min.png"
          }
        />
      </div>
      <div className="relative py-8 flex justify-center ">
        <Image
          src={"/landing/Shaadi-Organization-Pakistani-Rishtay-Pattern.png"}
          width={0}
          height={0}
          className="w-full absolute top-0 left-0 h-full"
          sizes="100vw"
          alt="cerficateimg"
        />
        <div className="max-w-screen-xl space-y-10 z-10">
          <Proposals title={"Australia  Proposals"} />
          <Proposals title={"Saudia  Proposals"} />
        </div>
      </div>
      <div>
        <Getnow
          description={
            "In our personalized matchmaking service, you will deal directly with our knowledgeable, professional, and approachable Matchmakers who understand and uphold Islamic teachings and Eastern values."
          }
          image={"img3.png"}
        />
      </div>
      <div className="relative py-8 flex justify-center ">
        <Image
          src={"/landing/Shaadi-Organization-Pakistani-Rishtay-Pattern.png"}
          width={0}
          height={0}
          className="w-full absolute top-0 left-0 h-full"
          sizes="100vw"
          alt="cerficateimg"
        />
        <div className="max-w-screen-xl space-y-10 z-10">
          <Proposals title={"UK  Proposals"} />
          <Proposals title={"France / Italy / Spain / Germany Proposals"} />
        </div>
      </div>
      <div>
        <Getnow
          description={
            "We believe in the enduring love between husband and wife. Knowing our work makes a difference in so many lives brings us great joy."
          }
          image={
            "shaadi-organization-pakistan-In-personalized-matchmaking-you-will-deal-directly-min.png"
          }
        />
      </div>
      <div className="relative py-8 flex justify-center ">
        <Image
          src={"/landing/Shaadi-Organization-Pakistani-Rishtay-Pattern.png"}
          width={0}
          height={0}
          className="w-full absolute top-0 left-0 h-full"
          sizes="100vw"
          alt="cerficateimg"
        />
        <div className="max-w-screen-xl space-y-10 z-10">
          <Proposals title={"USA Proposals"} />
          <Proposals title={"Canada Proposals"} />
        </div>
      </div>
      <div>
        <Getnow
          description={
            "In our personalized matchmaking service, you will deal directly with our knowledgeable, professional, and approachable Matchmakers who understand and uphold Islamic teachings and Eastern values."
          }
          image={"shaadi-orginazation-pakistan-happy-client.png"}
        />
      </div>
      <div className="relative py-8 flex justify-center ">
        <Image
          src={"/landing/Shaadi-Organization-Pakistani-Rishtay-Pattern.png"}
          width={0}
          height={0}
          className="w-full absolute top-0 left-0 h-full"
          sizes="100vw"
          alt="cerficateimg"
        />
        <div className="max-w-screen-xl space-y-10 z-10">
          <Proposals title={"USA Proposals"} />
          <Proposals title={"Canada Proposals"} />
        </div>
      </div>
      <div>
        <Getnow
          description={
            "In our personalized matchmaking service, you will deal directly with our knowledgeable, professional, and approachable Matchmakers who understand and uphold Islamic teachings and Eastern values."
          }
          image={"shaadi-orginazation-pakistan-happy-client.png"}
        />
      </div>
      <div className="relative py-8 flex justify-center ">
        <Image
          src={"/landing/Shaadi-Organization-Pakistani-Rishtay-Pattern.png"}
          width={0}
          height={0}
          className="w-full absolute top-0 left-0 h-full"
          sizes="100vw"
          alt="cerficateimg"
        />
        <div className="max-w-screen-xl space-y-10 z-10">
          <Proposals title={"USA Proposals"} />
          <Proposals title={"Canada Proposals"} />
        </div>
      </div>
      <div className="bg-red flex justify-center space-y-4 flex-col items-center pb-10">
        <div className="flex ">
          <Image
            src={"/landing/shaadi-organization-pakistan-perfect-match.png"}
            width={0}
            height={0}
            className="w-full "
            sizes="100vw"
            alt="cerficateimg"
          />
        </div>
        <h1 className="text-white font-medium text-[35px]">
          We Match Based on Compatibility, Not Just A Profile Picture
        </h1>
        <Button type={"white"} className=" !mt-10 !py-4 !px-10">
          Register Now
        </Button>
      </div>
      <div className="relative py-8 flex justify-center ">
        <Image
          src={"/landing/Shaadi-Organization-Pakistani-Rishtay-Pattern.png"}
          width={0}
          height={0}
          className="w-full absolute top-0 left-0 h-full"
          sizes="100vw"
          alt="cerficateimg"
        />
        <div className="max-w-screen-xl space-y-10 z-10">
          <Proposals title={"USA Proposals"} />
          <Proposals title={"Canada Proposals"} />
        </div>
      </div>
      <div className="bg-red py-8 ">
        <div className=" max-w-screen-xl mx-auto text-center space-y-6  items-center">
          <h1 className="text-4xl font-bold  text-white ">
            Our Special Guests
          </h1>

          <div className="w-[30%] mx-auto ">
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <p className="text-white font-semibold ">
            Shaadi Organization® Pakistan is thankful to our Chief Guests who
            visited us or participated in our events of matchmaking and
            encouraged us to keep doing the good social work.
          </p>
          <div className="grid grid-cols-6  gap-10">
            {[12, 3, 4, 5, 6, 3].map((items, index) => (
              <div key={index} className="relative  overflow-hidden border-yellow border-4 rounded-tr-[50px] ">
                <Image
                  src={"/landing/9980.jpg"}
                  width={0}
                  height={0}
                  className="w-full"
                  sizes="100vw"
                  alt="cerficateimg"
                />
                <p className="text-white py-4 abslopu absolute right-0 bottom-0 w-full z-10 bg-gradient-to-b from-yellow to-[#f6e6b5]">
                  M.Farhan Essa
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button type={"white"}> Veiw More</Button>
        </div>
      </div>
      <div className="py-8 ">
        <div className=" max-w-screen-xl mx-auto text-center space-y-6  items-center">
          <h1 className="text-4xl font-bold  text-red ">
            Grand Matchmaking Events
          </h1>

          <div className="w-[30%] mx-auto ">
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <p className="text-red font-semibold ">
            Participate in our grand matchmaking events to meet desirable
            families live.
          </p>
          <div className="grid grid-cols-6  gap-10">
            {[12, 3, 4, 5, 6, 3].map((items, index) => (
              <div key={index} className="relative  overflow-hidden border-yellow border-4 rounded-tl-[50px] ">
                <Image
                  src={"/landing/9980.jpg"}
                  width={0}
                  height={0}
                  className="w-full"
                  sizes="100vw"
                  alt="cerficateimg"
                />
                <p className="text-white py-4 abslopu absolute right-0 bottom-0 w-full z-10 bg-red">
                  M.Farhan Essa
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button> Veiw More</Button>
        </div>
      </div>
      <div className="bg-red py-8 ">
        <div className=" max-w-screen-xl mx-auto text-center space-y-6  items-center">
          <h1 className="text-4xl font-bold  text-white ">Our Offices</h1>

          <div className="w-[30%] mx-auto ">
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <p className="text-white font-semibold ">
            If you&apos;re looking for a life partner and don&apos;t know where to start,
            visit our offices today and our professional matchmakers will guide
            you in accordance with your preferences.
          </p>
          <div className="grid grid-cols-6  gap-10">
            {[12, 3, 4, 5, 6, 3].map((items, index) => (
              <div key={index} className="relative  overflow-hidden border-yellow border-4 rounded-tr-[50px] ">
                <Image
                  src={"/landing/9980.jpg"}
                  width={0}
                  height={0}
                  className="w-full"
                  sizes="100vw"
                  alt="cerficateimg"
                />
                <p className="text-white py-4 abslopu absolute right-0 bottom-0 w-full z-10 bg-gradient-to-b from-yellow to-[#f6e6b5]">
                  M.Farhan Essa
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button type={"white"}> Veiw More</Button>
        </div>
      </div>
      <div className="py-8 ">
        <div className=" max-w-screen-xl mx-auto text-center space-y-6  items-center">
          <h1 className="text-4xl font-bold  text-red ">Family Meetings</h1>

          <div className="w-[30%] mx-auto ">
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
          <p className="text-red font-semibold ">
            Meet with multiple families of various backgrounds live, and choose
            the match best suited for you.
          </p>
          <div className="grid grid-cols-6  gap-10">
            {[12, 3, 4, 5, 6, 3].map((items, index) => (
              <div key={index} className="relative  overflow-hidden border-yellow border-4 rounded-tl-[50px] ">
                <Image
                  src={"/landing/9980.jpg"}
                  width={0}
                  height={0}
                  className="w-full"
                  sizes="100vw"
                  alt="cerficateimg"
                />
                <p className="text-white py-4 abslopu absolute right-0 bottom-0 w-full z-10 bg-red">
                  M.Farhan Essa
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button> Veiw More</Button>
        </div>
      </div>
      <div>
        <div className="bg-red">
          <div className="max-w-screen-xl grid grid-cols-2  items-center gap-6 mx-auto py-8">
            <div className="space-y-4  ">
              <h1 className="text-4xl text-white font-bold">
                9-Points Verification System
              </h1>
              <h1 className="text-white   text-xl">
                Shaadi Organization® Pakistan uses unique 9-Points Trust and
                Safety features, for the security of our members, called
                “Verification Badges” that display on member profiles after they
                pass the verification of Mobile, Email, Location, Photo, Age,
                Education, Salary, Meeting, ID and Nationality. Fully verified
                members also get “The Famous Blue Tick” on their profiles.
              </h1>
              <Button type={"white"} className=" !mt-10 !py-4 !px-10">
                Veiw More
              </Button>
            </div>
            <Image
              src={`/landing/rishtay-pakistan-badges-image.png`}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="  text-center max-w-screen-xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold">Public Notices</h1>
          <div className="w-[30%] mx-auto ">
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>

          <h2 className="text-xl font-bold">
            Shaadi Organization® Pakistan - Important Public Notices.
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((items, index) => (
              <Image
                key={index}
                src={
                  "/landing/Shaadi-organization-paksitan-alert-warning-eng-small.jpg"
                }
                width={0}
                height={0}
                className="w-full h-full rounded-xl"
                sizes="100vw"
                alt="cerficateimg"
              />
            ))}
          </div>
          <Button>View More</Button>
        </div>
      </div>
      <div className="py-8">
        <div className="  text-center max-w-screen-xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold">Public Notices</h1>
          <div className="w-[30%] mx-auto ">
            <Image
              src={"/landing/shaadi-organization-pakistan-heading-border.png"}
              width={0}
              height={0}
              className="w-full"
              sizes="100vw"
              alt="cerficateimg"
            />
          </div>

          <h2 className="text-xl font-bold">
            Shaadi Organization® Pakistan - Important Public Notices.
          </h2>
          <div className="grid grid-cols-2 !text-start gap-8">
            {[1, 2].map((items, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-4 bg-[#fdf3f4] items-center rounded-xl p-4"
              >
                <Image
                  src={"/landing/doosribiwi-site-image.jpg"}
                  width={0}
                  height={0}
                  className="w-full  rounded-xl"
                  sizes="100vw"
                  alt="cerficateimg"
                />
                <div className="space-y-1">
                  <h1 className="text-3xl text-red font-bold">
                    DoosriBiwi.Com
                  </h1>
                  <p>
                    DoosriBiwi.com aim to create a world where individuals can
                    explore and embrace polygamous relationships within the
                    framework of Islamic principles...
                  </p>
                  <Button>Lets Visit</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
