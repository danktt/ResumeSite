export default function Faqs() {
  return (
    <>
      <div className="">
        <details className="p-3 border-l-4 border-accent bg-primary group rounded-lg hover:bg-primary-focus delay-150 transition">
          <summary className="flex items-center flex-col justify-between cursor-pointer">
            <div className="flex justify-between w-3/4 m-auto">
              <h5 className="font-medium text-base-100 lg:text-lg text-sm flex items-center gap-2">
                <span className="text-4xl">🇬🇧</span> CF Partners
              </h5>
              <span className="text-accent text-sm lg:text-lg">
                November 2022 - Currently
              </span>
            </div>

            <div>
              <p className="lg:text-3xl text-xl">Software Engineer</p>
            </div>
          </summary>

          <p className="mt-4 leading-relaxed text-base-100 text-center">
            React Js | Next Js | Typescript | Javascript | Jest | Tailwindcss |
            DaisyUI
          </p>
        </details>
      </div>
      <br />
      <div className="space-y-4">
        <details className="p-3 border-l-4 border-accent bg-primary group rounded-lg hover:bg-primary-focus delay-150 transition">
          <summary className="flex items-center flex-col justify-between cursor-pointer">
            <div className="flex justify-between w-3/4 m-auto">
              <h5 className="font-medium text-base-100 lg:text-lg text-sm flex items-center gap-2">
                <span className="text-4xl">🇧🇷</span>SBanco
              </h5>
              <span className="text-accent text-sm lg:text-lg">
                2022 – November 2022
              </span>
            </div>

            <div>
              <p className="lg:text-3xl text-xl">Frontend Developer</p>
            </div>
          </summary>

          <p className="mt-4 leading-relaxed text-base-100 text-center">
            React Js | Next Js | Typescript | Javascript | Redux | Redux Saga |
            Jest | Styled Components | Tailwindcss | DaisyUI
          </p>
        </details>
      </div>
      <br />

      <div className="space-y-4">
        <details className="p-3 border-l-4 border-accent bg-primary group rounded-lg hover:bg-primary-focus delay-150 transition">
          <summary className="flex items-center flex-col justify-between cursor-pointer">
            <div className="flex justify-between w-3/4 m-auto">
              <h5 className="lg:text-lg text-sm font-medium text-base-100 flex items-center gap-2 ">
                <span className="text-4xl">🇧🇷</span>SBanco Brazilian Army
              </h5>
              <span className="text-accent text-sm lg:text-lg">
                2018 – 2022
              </span>
            </div>

            <div>
              <p className="lg:text-3xl text-xl">Developer</p>
            </div>
          </summary>

          <p className="mt-4 leading-relaxed text-base-100 text-center">
            Linux | CSS | HTML | Java script | React JS | Node JS | Laravel |
            PHP and SQL Basic
          </p>
        </details>
      </div>
      <br />

      <div className="space-y-2">
        <details className="p-3 border-l-4 border-accent bg-primary hover:bg-primary-focus delay-150 transition group rounded-lg">
          <summary className="flex items-center flex-col justify-between cursor-pointer">
            <div className="flex justify-between w-3/4 m-auto">
              <h5 className=" font-medium text-base-100 lg:text-lg text-sm flex items-center gap-2">
                <span className="text-4xl">🇧🇷</span> Brazilian Army
              </h5>
              <span className="text-accent text-sm lg:text-lg">
                2019 – 2020{" "}
              </span>
            </div>

            <div>
              <p className="lg:text-3xl text-xl">
                Information Technology Technician
              </p>
            </div>
          </summary>

          <p className="mt-4 leading-relaxed text-base-100 text-center">
            - Network maintenance, VOIP and analog telephony (network
            structuring); - Maintenance management of printers and computers; -
            Support for CCTV system and IP cameras; - Support to users in the
            use of the computer, installations and maintenance; -
            Implementation, maintenance and monitoring of Servers, Switches and
            Database; - Supervision and management of services in the IT area;
          </p>
        </details>
      </div>
    </>
  );
}
