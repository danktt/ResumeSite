import { Widget } from "./Components/Widget/Widget";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import SmoothScroll from "smooth-scroll";

import Services from "./Pages/Services";
import { useState } from "react";

import Loading from "./Components/Loading";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [loading, setLoading] = useState(true);
  // const [pageData, setPageData] = useState({} as pageDataProps);

  // let first = document.getElementById("home");
  // if (first) first.style.position = "relative";

  // let second = document.getElementById("about");
  // if (second) second.style.position = "relative";

  // useEffect(() => {
  //   setPageData(Data as any);
  // }, []);
  // eslint-disable-next-line

  setTimeout(() => {
    setLoading(false);
  }, 1200);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Education />
          <Experience />
          <Contact />
          <Widget />ß
        </>
      )}
    </>
  );
}

export default App;
