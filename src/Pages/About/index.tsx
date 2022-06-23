interface dataProps {
  data?: {
    title: string;
  };
}

export default function About({ data }: dataProps) {
  return (
    <div
      id="about"
      className="h-screen bg-black-figma   scroll-smooth absolute "
    >
      <div className="flex items-center justify-center pt-20">
        <span className="text-3xl text-yellow-figma underline  ">
          <div className="relative rounded-sm  h-[9px] w-[9px] rotate-45 top-[36px] right-[8px]  bg-yellow-figma border border-solid border-yellow-figma  " />
          ABOUT
        </span>
        <h1 className="text-white lg:text-8xl text-5xl font-semibold">
          Know Me More
        </h1>
      </div>

      <main className="text-center pt-6">
        <div>
          <h2 className=" text-[40px]">
            I'm{" "}
            <span className="text-yellow-figma text-[40px]">
              Danilo Miranda,
            </span>{" "}
            a Software Developer
          </h2>
        </div>

        <div className="text-center">
          <p className="text-justify">
            I started in the administrative area and was transferred to the
            communication technology sector, where I started as a computer
            maintenance technician. Then, I took a specialized course in
            telecommunications networks, where I went further in the technology
            area. I entered the Computer Engineering course, studied 5 semesters
            and did not finish. Currently I work with Information Technology, I
            am studying Systems Analysis and Development and programming.
          </p>
        </div>
      </main>
    </div>
  );
}
