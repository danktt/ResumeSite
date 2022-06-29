export default function Contact() {
  return (
    <div id="contact" className=" bg-black-figma   scroll-smooth">
      <div className="flex items-center justify-center pt-32 mb-4">
        <span className="text-3xl text-yellow-figma underline  ">
          <div className="relative rounded-sm  h-[9px] w-[9px] rotate-45 top-[36px] right-[8px]  bg-yellow-figma border border-solid border-yellow-figma  " />
          CONTACT
        </span>
        <h1 className="text-white lg:text-8xl text-5xl font-semibold">
          Get in Touch
        </h1>
      </div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <p className="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div className="mt-8">
              <a href="/#" className="text-2xl font-bold text-yellow-figma">
                {" "}
                0151 475 4450{" "}
              </a>
              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="p-8 bg-azul-turquesa rounded-lg shadow-lg lg:p-5 lg:col-span-3">
            <h1 className="text-4xl text-center mb-5">
              How can I{" "}
              <span className="text-yellow-figma text-4xl">help you?</span>{" "}
            </h1>
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Message"
                  rows={8}
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-accent hover:bg-accent-focus duration-100 rounded-lg sm:w-auto"
                >
                  <span className="font-medium"> Send message </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="pr-4">
        <div className="bg-yellow-figma ml-auto  hover:bg-yellow-600 h-16 w-16 rounded-full flex items-center justify-center relative">
          <a href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
