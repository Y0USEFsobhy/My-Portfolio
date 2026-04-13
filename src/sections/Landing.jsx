import Nav from "../components/Nav";
import Particles from "../library/Particles";
import RotatingText from "../library/RotaingText";
import Button from "../components/Button";
import BorderGlowProjects from "../components/BorderGlowProjects";
function Landing() {
  return (
    <section id="home" className="flex flex-col my-10">
      <div className="h-dvh w-full relative ">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={300}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={100}
          // moveParticlesOnHover
          alphaParticles={false}
          disableRotation={true}
          pixelRatio={5}
          className={"z-10 pointer-events-none"}
        />
      </div>
      <Nav className={" z-10  fixed w-full top-0 left-1/2 -translate-x-1/2"} />
      <div className="absolute flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-between w-full text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:px-30 md:px-10 px-5 lg:mt-10 md:mt-33 sm:mt-33 mt-10">
        <div id="right" className="md:w-3/4 w-full">
          <div className="flex items-center gap-2 md:text-4xl text-2xl font-bold">
            I'am Yousef -
            <RotatingText
              texts={[
                "React Developer ",
                "Front End",
                "solving problems",
                "creating!",
                "solving",
                "Learing",
                "Coding",
                "joe",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 items-center bg-white md:text-4xl text-xl text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </div>
          <p className="my-4 text-md md:w-[65%] w-full">
            I’m a Computer Science graduate who has spent the last three years
            focused on front-end development. I enjoy learning something new
            every day and continuously improving my skills. I’m currently
            planning to expand into back-end development and grow into a
            full-stack developer.
          </p>
          <a href="/files/Yousef Sobhy CV.pdf" download className="w-fit block">
          <Button icon={"downloud"}>Downloud CV</Button>
          </a>
        </div>

          <div
            id="left"
            className=" md:w-1/4 justify-center w-full flex md:justify-end"
          >
        {/* <BorderGlowProjects className={"h-full bg-red-600 "}> */}
            <img
                // width={200}
                // height={200}
              src="IMG_20241027_113425_779_2.jpg"
              alt="profile"
              className="
              
               hover:after:animate-pulse
              w-[70%] md:w-62.5 m-0 lg:scale-125 scale-110 rounded-xl md:mr-10 border-2 border-white"
            />
            {/* <img
                // width={200}
                // height={200}
              src="for small screen.jpg"
              alt="profile"
              className="
              md:hidden 
               hover:after:animate-pulse
              w-[70%] md:w-62.5 m-0 lg:scale-125 scale-110 rounded-xl md:mr-10 border-2 border-white"
            /> */}
        {/* </BorderGlowProjects> */}
          </div>
      </div>
    </section>
  );
}

export default Landing;
