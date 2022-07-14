interface dataProps {
  data?: {
    title: string;
  };
}

export default function About({ data }: dataProps) {
  return (
    <div id="about" className="lg:h-screen bg-secondary   scroll-smooth ">
      <div className="flex items-center justify-center pt-32 mb-4">
        <span className="lg:text-3xl text-base text-accent underline  ">
          <div className="relative rounded-sm h-[4px] w-[4px] lg:h-[9px] lg:w-[9px] rotate-45 lg:top-[36px] top-[21px] lg:right-[8px] right-[4px]  bg-accent border border-solid border-accent  " />
          ABOUT
        </span>
        <h1 className="text-base-100  lg:text-8xl text-4xl font-semibold">
          Know Me More
        </h1>
      </div>

      <main className="text-center pt-6 ">
        <div>
          <h2 className=" text-4xl ">
            I'm <span className="text-accent text-4xl">Danilo Miranda,</span> a
            Software Developer
          </h2>
        </div>

        <section>
          <div className="max-w-screen-xl px-3 py-10 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQFRD-aNWlUVOg/profile-displayphoto-shrink_400_400/0/1654785141103?e=1663200000&v=beta&t=11p0eWECoXSJBZ0bASbypxU-xgRxfRGREYMNtnBM6GI"
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
