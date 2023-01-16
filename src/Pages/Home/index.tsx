import { BsGithub, BsLinkedin, BsMessenger, BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="hero h-screen bg-secondary bg-hero-pattern  bg-no-repeat bg-center scroll-smooth"
      >
        <div>
          <div className="flex flex-col mb-9 lg:w-[735px]  lg:items-start  items-center    ">
            <h1 className="lg:text-4xl md:text-3xl text-2xl md:mb-4 mb-4 font-light lg:pl-20 ">
              Welcome
            </h1>
            <span className=" text-center  lg:text-[65px] md:text-[50px] text-[32px] font-bold ">
              <Typewriter
                options={{
                  wrapperClassName: "text-accent",
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: ["I’m Danilo Miranda.", "I’m a Web Developer."],
                }}
              />
            </span>
            <h2 className="lg:text-4xl md:mt-2 mt-2 md:text-3xl text-[20px] text-center font-light lg:pl-9  ">
              SOFTWARE DEVELOPER
            </h2>
          </div>
          <div className="  w-full flex justify-center  ">
            <a
              href="#contact"
              className="btn-outline btn mt-9 font-light hover:text-base-100 text-accent border-accent hover:border-accent-focus  hover:bg-accent  lg:w-56 md:w-40 text-3xl rounded-2xl "
            >
              hire
            </a>
          </div>
        </div>
        <div className="w-full pb-7  mt-auto md:flex md:justify-center hidden">
          <div className="flex justify-center gap-12  ">
            <a
              className="text-3xl hover:text-accent delay-100 duration-100"
              href="https://www.linkedin.com/in/danilo-miranda15/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>

            <a
              className="text-3xl hover:text-accent delay-100 duration-100"
              href="https://contate.me/danilo-miranda"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp />
            </a>

            <a
              className="text-3xl hover:text-accent delay-100 duration-100"
              href="https://twitter.com/danktt_"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>

            <a
              className="text-3xl hover:text-accent delay-100 duration-100"
              href="https://www.facebook.com/danilo.miranda.1272"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              className="text-3xl hover:text-accent delay-100 duration-100"
              href="https://www.instagram.com/danilo.mirandaa_/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              className="text-3xl hover:text-accent delay-100 duration-100"
              href="https://github.com/danktt"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className="text-3xl hover:text-accent delay-100 duration-100"
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
