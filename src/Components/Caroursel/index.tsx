// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper max-w-4xl max-h-[400px]"
      >
        <SwiperSlide className=" flex flex-col justify-start bg-primary rounded-b-3xl rounded-t-3xl">
          <div className="flex flex-col p-5 text-base-100">
            <span className="text-accent self-start">2020 – 2023</span>
            <header className="p-5">
              <h1 className="text-3xl">University Unicesumar </h1>
            </header>
            <div className="p-4 font-bold">
              <h2 className="text-2xl">
                {" "}
                Diploma Technologist System <br /> analysis and development
              </h2>
            </div>
            <p className="text-sm lg:text-base">
              The course aimed at training, enabling professional performance in
              the areas of software development, interfaces and applications.
              Possibility to manage systems projects in multidisciplinary teams,
              including access to databases and application development; it also
              works with emerging technologies, such as mobile computing and
              distributed systems; and installation, update, maintenance and
              security of systems, in companies, organizations or in the
              creation of your own business.
            </p>
          </div>
        </SwiperSlide>
        <br />
        <SwiperSlide className=" flex flex-col justify-start bg-primary rounded-b-3xl  rounded-t-3xl ">
          <div className="flex flex-col p-5 text-base-100">
            <span className="text-accent self-start">2021 – 2021</span>
            <header className="p-5">
              <h1 className="text-3xl">Ignite Bootcamp</h1>
            </header>
            <div className="p-4 font-bold">
              <h2 className="text-2xl"> Rocketseakt, Brazil</h2>
            </div>
            <p className="text-sm lg:text-base">
              Construction of a mini financial system with HTML, CSS and JS and
              application of the code on Github. Learning how to put a template
              in HTML, CSS and JS to work on a NodeJS Backend. Use of the
              Express library to create a server and the routes of the
              application. Use of EJS for the template engine, that is, the tool
              capable of generating HTML and CSS through the back-end.
              Construction of a calculator app for freelance work, with NodeJS
              server, EJS for template engine and SQLite as a database. ReactJS
              and Typescript; React Native; Node.js or Elixir.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
