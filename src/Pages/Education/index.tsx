import Carousel from "../../Components/Caroursel/index";

export default function Education() {
  return (
    <div id="education" className="lg:h-screen bg-secondary  scroll-smooth">
      <div className="flex items-center justify-center pt-32 mb-4">
        <span className="text-3xl text-accent underline  ">
          <div className="relative rounded-sm  h-[9px] w-[9px] rotate-45 top-[36px] right-[8px]  bg-accent border border-solid border-accent  " />
          EDUCATION
        </span>
        <h1 className="text-base-100 lg:text-8xl text-5xl font-semibold">
          Knowledge
        </h1>
      </div>

      <Carousel />
    </div>
  );
}
