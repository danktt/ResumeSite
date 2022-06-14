import Button from "../Components/Button";

export default function Home() {
  return (
    <div className="hero flex flex-col justify-center  h-screen ">
      <div className="flex flex-col mb-9">
        <h1 className="text-4xl font-light pl-20 ">Welcome</h1>
        <span className="text-[65px] font-bold ">
          I’m Danilo Miranda
          <span className="text-yellow-figma text-7xl">.</span>
        </span>
        <h2 className="text-4xl font-light pl-9  ">SOFTWARE DEVELOPER</h2>
      </div>
      <div className="  w-full flex justify-center">
        <Button
          title="hire"
          type="button"
          className=" font-light hover:text-white text-yellow-figma border-yellow-figma hover:border-yellow-figma  hover:bg-yellow-figma  w-56 text-3xl rounded-2xl "
        />
      </div>
    </div>
  );
}
