export default function Faqs() {
  return (
    <>
      <div className="space-y-2">
        <details className="p-3 border-l-4 border-accent bg-primary group rounded-lg hover:bg-primary-focus delay-150 transition">
          <summary className="flex items-center flex-col justify-between cursor-pointer">
            <div className="flex justify-between w-3/4 m-auto">
              <h5 className="text-lg font-medium text-base-100">SBanco </h5>
              <span className="text-accent">2022 – Currently </span>
            </div>

            <div>
              <p className="text-3xl">Frontend Developer</p>
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
              <h5 className="text-lg font-medium text-base-100">
                Brazilian Army{" "}
              </h5>
              <span className="text-accent">2018 – 2022</span>
            </div>

            <div>
              <p className="text-3xl">Developer</p>
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
              <h5 className="text-lg font-medium text-base-100">
                Brazilian Army{" "}
              </h5>
              <span className="text-accent">2019 – 2020 </span>
            </div>

            <div>
              <p className="text-3xl">Information Technology Technician</p>
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
