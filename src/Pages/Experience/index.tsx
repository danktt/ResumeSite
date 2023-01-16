import Faqs from "../../Components/Faqs";

export default function Experience() {
  return (
    <div id="experience" className="lg:h-screen bg-secondary  scroll-smooth">
      <div className="flex items-center justify-center pt-32 mb-4">
        <span className="lg:text-3xl text-base text-accent underline  ">
          <div className="relative rounded-sm h-[4px] w-[4px] lg:h-[9px] lg:w-[9px] rotate-45 lg:top-[36px] top-[21px] lg:right-[8px] right-[4px]  bg-accent border border-solid border-accent  " />
          EXPERIENCE
        </span>
        <h1 className="text-base-100  lg:text-8xl text-4xl font-semibold">
          Occupation
        </h1>
      </div>

      <div className="lg:w-3/5 mx-3 lg:m-auto mt-5 pt-6">
        <Faqs />
      </div>
    </div>
  );
}
