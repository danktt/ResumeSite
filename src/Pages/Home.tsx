import Button from "../Components/Button";
import { BsGithub, BsLinkedin, BsMessenger, BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className=" hero h-screen bg-hero-pattern  bg-no-repeat bg-center">
        <div className=" ">
          <div className="flex flex-col   mb-9 w-full lg:items-start  items-center   ">
            <h1 className="lg:text-4xl md:text-3xl text-2xl md:mb-4 mb-4 font-light lg:pl-20 ">
              Welcome
            </h1>
            <span className="  text-center lg:text-[65px] md:text-[50px] text-3xl font-bold ">
              I’m Danilo Miranda
              <span className="text-yellow-figma lg:text-7xl">.</span>
            </span>
            <h2 className="lg:text-4xl md:mt-2 mt-2 md:text-3xl text-2xl text-center font-light lg:pl-9  ">
              SOFTWARE DEVELOPER
            </h2>
          </div>
          <div className="  w-full flex justify-center  ">
            <Button
              title="hire"
              type="button"
              className=" mt-9 font-light hover:text-white text-yellow-figma border-yellow-figma hover:border-yellow-figma  hover:bg-yellow-figma  lg:w-56 md:w-40 text-3xl rounded-2xl "
            />
          </div>
        </div>
        <div className="w-full pb-7  mt-auto md:flex md:justify-center hidden">
          <div className="flex justify-center gap-12  ">
            <a
              className="text-3xl hover:text-yellow-figma delay-100 duration-100"
              href="https://www.linkedin.com/in/danilo-miranda15/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>

            <a
              className="text-3xl hover:text-yellow-figma delay-100 duration-100"
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp />
            </a>

            <a
              className="text-3xl hover:text-yellow-figma delay-100 duration-100"
              href="https://twitter.com/danktt_"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>

            <a
              className="text-3xl hover:text-yellow-figma delay-100 duration-100"
              href="https://www.facebook.com/danilo.miranda.1272"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              className="text-3xl hover:text-yellow-figma delay-100 duration-100"
              href="https://www.instagram.com/danilo.mirandaa_/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              className="text-3xl hover:text-yellow-figma delay-100 duration-100"
              href="https://github.com/danktt"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className="text-3xl hover:text-yellow-figma delay-100 duration-100"
              href="https://www.facebook.com/messages"
              target="_blank"
              rel="noreferrer"
            >
              <BsMessenger />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
