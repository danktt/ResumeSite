import Progress from "../../Components/Progress";

export default function Services() {
  return (
    <div id="services" className="lg:h-screen bg-secondary  scroll-smooth">
      <div className="flex items-center justify-center pt-32 mb-4 ">
        <span className="lg:text-3xl text-base text-accent underline  ">
          <div className="relative rounded-sm h-[4px] w-[4px] lg:h-[9px] lg:w-[9px] rotate-45 lg:top-[36px] top-[21px] lg:right-[8px] right-[4px]  bg-accent border border-solid border-accent  " />
          SERVICES
        </span>
        <h1 className="text-base-100  lg:text-8xl text-4xl font-semibold">
          What I do
        </h1>
      </div>

      <div className="lg:flex lg:flex-row lg:gap-28 md:gap-8 sm:flex-col  flex gap-3 items-center   md:flex-col justify-center mt-12">
        <div className="card">
          <div className="card__content text-sm lg:text-base">
            <div className="card__front bg-primary ">
              <h1 className="text-accent">FRONT-END</h1>
            </div>
            <div className="card__back bg-primary text-left ">
              <h1 className="text-center text-accent">LANGUAGE CODE</h1>
              <li className="ml-4">JavaScript</li>
              <li className="ml-4">TypeScript</li>
              <li className="ml-4">HTML/ CSS </li>
              <h1 className="text-center text-accent">FRAMEWORK </h1>
              <li className="ml-4">ReactJS</li>
              <li className="ml-4">NextJs</li>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__content text-sm lg:text-base">
            <div className="card__front bg-primary ">
              <h1 className="text-accent">BACK-END</h1>
            </div>
            <div className="card__back bg-primary text-left  ">
              <h1 className="text-center text-accent">LANGUAGE CODE</h1>
              <li className="ml-8">NodeJs</li>
              <li className="ml-8">MySQL</li>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__content text-sm lg:text-base">
            <div className="card__front bg-primary ">
              <h1 className="text-accent">SYSTEMS</h1>
            </div>
            <div className="card__back bg-primary text-left ">
              <h1 className="text-center text-accent">OPERATIONAL SYSTEM</h1>
              <li className="ml-8">Linux</li>
              <li className="ml-8">Windows</li>
              <li className="ml-8">IOS </li>
              <li className="ml-8">Android</li>
              <li className="ml-8">NextJs</li>
            </div>
          </div>
        </div>
      </div>
      <main className=" flex flex-col items-center justify-center mt-12">
        <div className="flex flex-col gap-3 text-center mt-5">
          <h1 className="text-base-100">Hard Skills </h1>
          <Progress nameLangued="ReactJs" porcentege="93" value="93" />
          <Progress nameLangued="Git" porcentege="99" value="99" />
          <Progress nameLangued="Linux" porcentege="100" value="100" />
        </div>
      </main>
    </div>
  );
}
