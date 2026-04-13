import BorderGlowProjects from "../components/BorderGlowProjects";
import Button from "../components/Button";
function Projects() {
  return (
    <section
      id="projects"
      className="lg:px-30 md:px-20 px-6 text-white flex flex-col gap-6 "
    >
      <h2 className="text-5xl mb-3">Projects</h2>
      <BorderGlowProjects>
        <div className="p-3 md:p-5  flex md:flex-row flex-col items-center gap-5 ">
          <div className="md:w-1/2 w-full">
            <img
              loading="lazy"
              className="rounded-md"
              src="Screenshot (5).png"
              alt="alt"
            />
          </div>
          <div className="flex flex-col gap-5 md:mt-5 h-full md:w-1/2 w-full ">
            <h1 className="md:text-3xl text-2xl">Numerical analysis</h1>
            <p className="md:text-sm lg:text-[16px]">
              An interactive web application that implements essential numerical
              analysis methods such as root-finding, linear system solving, and
              interpolation. It demonstrates my ability to apply mathematical
              algorithms and present them through a clean, user-friendly
              interface.
            </p>
            <div className="flex gap-5">
              <Button icon={"live"}>
                <a
                  href="https://y0usefsobhy.github.io/Numerical-analysis-project/"
                  target="_blank"
                >
                  Live demo
                </a>
              </Button>
              <Button icon={"git"}>
                <a
                  href="https://github.com/Y0USEFsobhy/Numerical-analysis-project"
                  target="_blank"
                >
                  Repository
                </a>
              </Button>
            </div>
          </div>
        </div>
      </BorderGlowProjects>
      <BorderGlowProjects>
        <div className="p-3 md:p-5  flex md:flex-row flex-col items-center gap-5 ">
          <div className="md:w-1/2 w-full">
            <img
              loading="lazy"
              className="rounded-md"
              src="Screenshot (6).png"
              alt="alt"
            />
          </div>
          <div className="flex flex-col gap-5 md:mt-5 h-full md:w-1/2 w-full ">
            <h1 className="md:text-3xl text-2xl">Media Team Information</h1>
            <p>
              The website presents information about a media team and their
              capabilities. It is divided into two main sections that show the
              team’s current resources and potential areas they may work on in
              the future. Each section contains four categories to organize the
              information and make it easier for visitors to explore the team’s
              work.
            </p>
            <div className="flex gap-5">
              <Button icon={"live"}>
                <a
                  href="https://y0usefsobhy.github.io/media-team/"
                  target="_blank"
                >
                  Live demo
                </a>
              </Button>
              <Button icon={"git"}>
                <a
                  href="https://github.com/Y0USEFsobhy/media-team"
                  target="_blank"
                >
                  Repository
                </a>
              </Button>
            </div>
          </div>
        </div>
      </BorderGlowProjects>
      <BorderGlowProjects>
        <div className="p-3 md:p-5  flex md:flex-row flex-col items-center gap-5 ">
          <div className="md:w-1/2 w-full">
            <img
              loading="lazy"
              className="rounded-md"
              src="Screenshot (7).png"
              alt="alt"
            />
          </div>
          <div className="flex flex-col gap-5 md:mt-5 h-full md:w-1/2 w-full ">
            <h1 className="md:text-3xl text-2xl">Weather App</h1>
            <p>
              A responsive weather application built with React.js that displays
              real-time weather data for any city. It integrates with a weather
              API to show temperature, conditions, humidity, and wind speed
              through a clean and intuitive interface. Demonstrates API
              integration, state management, and dynamic UI rendering.
            </p>
            <div className="flex gap-5">
              <Button icon={"live"}>
                <a
                  href="https://y0usefsobhy.github.io/weather_app_react/"
                  target="_blank"
                >
                  Live demo
                </a>
              </Button>
              <Button icon={"git"}>
                <a
                  href="https://github.com/Y0USEFsobhy/weather_app_react"
                  target="_blank"
                >
                  Repository
                </a>
              </Button>
            </div>
          </div>
        </div>
      </BorderGlowProjects>
      <BorderGlowProjects>
        <div className="p-3 md:p-5  flex md:flex-row flex-col items-center gap-5 ">
          <div className="md:w-1/2 w-full">
            <img
              loading="lazy"
              className="rounded-md"
              src="Gemini_Generated_Image_n7obggn7obggn7ob.png"
              alt="alt"
            />
          </div>
          <div className="flex flex-col gap-5 md:mt-5 h-full md:w-1/2 w-full ">
            <h1 className="md:text-3xl text-2xl">soon..</h1>
            <p>Soon </p>
          </div>
        </div>
      </BorderGlowProjects>
    </section>
  );
}

export default Projects;
