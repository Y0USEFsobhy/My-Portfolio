import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Landing from "../sections/Landing";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Nav from "../components/Nav";

function Applayout(){
  return (
    <div>
        <Landing/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
};

export default Applayout;