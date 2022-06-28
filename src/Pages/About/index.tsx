interface dataProps {
  data?: {
    title: string;
  };
}

export default function About({ data }: dataProps) {
  return (
    <div id="about" className="lg:h-screen bg-black-figma   scroll-smooth ">
      <div className="flex items-center justify-center pt-32 mb-4">
        <span className="text-3xl text-yellow-figma underline  ">
          <div className="relative rounded-sm  h-[9px] w-[9px] rotate-45 top-[36px] right-[8px]  bg-yellow-figma border border-solid border-yellow-figma  " />
          ABOUT
        </span>
        <h1 className="text-white lg:text-8xl text-5xl font-semibold">
          Know Me More
        </h1>
      </div>

      <main className="text-center pt-6 ">
        <div>
          <h2 className=" text-[40px]">
            I'm{" "}
            <span className="text-yellow-figma text-[40px]">
              Danilo Miranda,
            </span>{" "}
            a Software Developer
          </h2>
        </div>

        <div className="px-4 py-16   sm:px-6 lg:px-8  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  className="absolute inset-0 w-full h-full"
                  src="https://www.github.com/danktt.png"
                  alt="Indoors house"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-azul-turquesa">
              <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-azul-turquesa lg:block lg:-left-16"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <p className="mt-4 text-white">
                  I started in the administrative area and was transferred to
                  the communication technology sector, where I started as a
                  computer maintenance technician. Then, I took a specialized
                  course in telecommunications networks, where I went further in
                  the technology area. I entered the Computer Engineering
                  course, studied 5 semesters and did not finish. Currently I
                  work with Information Technology, I am studying Systems
                  Analysis and Development and programming
                </p>

                {/* <a
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                  href="/contact"
                >
                  Get in Touch
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
