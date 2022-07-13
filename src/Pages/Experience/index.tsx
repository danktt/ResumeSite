import Faqs from "../../Components/Faqs";

export default function Experience() {
  return (
    <div id="experience" className="lg:h-screen bg-secondary  scroll-smooth">
      <div className="flex items-center justify-center pt-32 mb-4">
        <span className="text-3xl text-accent underline  ">
          <div className="relative rounded-sm  h-[9px] w-[9px] rotate-45 top-[36px] right-[8px]  bg-accent border border-solid border-accent  " />
          EXPERIENCE
        </span>
        <h1 className="text-base-100 lg:text-8xl text-5xl font-semibold">
          Occupation
        </h1>
      </div>

      <div className="w-3/5 m-auto mt-5">
        <Faqs />
      </div>
    </div>
  );
}
