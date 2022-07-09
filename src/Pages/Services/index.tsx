import Progress from "../../Components/Progress";

export default function Services() {
  return (
    <div id="services" className="lg:h-screen bg-black-figma  scroll-smooth">
      <div className="flex items-center justify-center pt-32 mb-4">
        <span className="text-3xl text-yellow-figma underline  ">
          <div className="relative rounded-sm  h-[9px] w-[9px] rotate-45 top-[36px] right-[8px]  bg-yellow-figma border border-solid border-yellow-figma  " />
          SERVICES
        </span>
        <h1 className="text-white lg:text-8xl text-5xl font-semibold">
          What I do
        </h1>
      </div>

      <main className=" flex flex-col items-center justify-center">
        <div className=" flex gap-6">
          <div className="w-40 h-40 rounded-2xl bg-primary">OI</div>
          <div className="w-40 h-40 rounded-2xl bg-primary">OI</div>
          <div className="w-40 h-40 rounded-2xl bg-primary">OI</div>
        </div>

        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-base-100">Hard Skills </h1>
          <Progress nameLangued="ReactJs" porcentege="93" value="93" />
          <Progress nameLangued="Git" porcentege="99" value="99" />
          <Progress nameLangued="Linux" porcentege="100" value="100" />
        </div>
      </main>
    </div>
  );
}
