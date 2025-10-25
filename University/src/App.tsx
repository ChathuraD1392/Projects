import { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cover from "./components/Cover/Cover";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import University from "./components/University/University";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [isVideoPlay, setVideoPlay] = useState(false);

  return (
    <>
      <div>
        <NavBar />
        <Cover />
        <div className="container">
          <Title subtitle="Our Programs" title="What we Offer" />
          <Programs />
          <About setVideoPlay={setVideoPlay} />
          <Title subtitle="Gallery" title="University Photoes" />
          <University />
          <Title subtitle="Testimonials" title="What students say" />
          <Testimonials />
          <Title subtitle="Contact us" title="Get in Touch" />
          <Contact />
          <Footer />
        </div>
        {<VideoPlayer isPlay={isVideoPlay} setPlay={setVideoPlay} />}
      </div>
    </>
  );
};

export default App;
