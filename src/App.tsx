import { Widget } from "./Components/Widget/Widget";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import SmoothScroll from "smooth-scroll";

import Data from "./Data/data.json";
import { useEffect, useState } from "react";
// import { Layout } from "./patterns/layout";

interface pageDataProps {
  About: any;
}

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [pageData, setPageData] = useState({} as pageDataProps);

  useEffect(() => {
    setPageData(Data as any);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Contact />
      <Widget />
    </>
  );
}

export default App;
