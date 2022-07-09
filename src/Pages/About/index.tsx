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

        <section>
          <div className="max-w-screen-xl px-3 py-10 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="https://www.github.com/danktt.png"
                  alt="Danilo Miranda"
                />
              </div>

              <div className="lg:py-24">
                <p className="mt-4 text-base-100">
                  My goal is always to expand my knowledge as a Dev, putting the
                  acquired knowledge into practice, with ethics and
                  responsibility. I always try my best to create the best
                  applications, being in tune and communicative with the team is
                  vital to the progress of the requirements. Currently, I work
                  as a ReactJs Front-end developer. Knowledge of technologies:
                  JavaScript, Typescript, ReactJs, NextJs Redux, Redux Sagas,
                  Styled components, SASS, TailwindCss, Mock and TDD.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
