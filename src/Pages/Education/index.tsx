import Carousel from "../../Components/Caroursel/index";

export default function Education() {
  return (
    <div id="education" className="lg:h-screen bg-secondary  scroll-smooth">
      <div className="flex items-center justify-center pt-32 mb-4 ">
        <span className="lg:text-3xl text-base text-accent underline  ">
          <div className="relative rounded-sm h-[4px] w-[4px] lg:h-[9px] lg:w-[9px] rotate-45 lg:top-[36px] top-[21px] lg:right-[8px] right-[4px]  bg-accent border border-solid border-accent  " />
          EDUCATION
        </span>
        <h1 className="text-base-100  lg:text-8xl text-4xl font-semibold">
          Knowledge
        </h1>
      </div>

      <Carousel />
    </div>
  );
}
