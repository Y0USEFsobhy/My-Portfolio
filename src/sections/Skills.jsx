import LogoLoop from "../library/LogoLoop";
import AnimatedContent from "../library/AnimatedContent";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiStyledcomponents,
  SiVite,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  //   { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },

  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  {
    node: <SiStyledcomponents />,
    title: "Styled Components",
    href: "https://styled-components.com",
  },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="lg:px-30 md:px-20 px-6 mt-10 md:mt-35 w-full text-white"
    >
      <h2 className="text-5xl mb-3">Skills</h2>
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.7}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={1}
      >
        <div className="grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4 mb-9">
          <div className="bg-[#0f141a] rounded-lg p-3 lg:row-span-2">
            <span className="text-[#00E5FF] text-center block mb-2">
              Front end
            </span>
            <ul className="flex flex-wrap lg:block">
              <li className="text-[#00E5FF] bg-[#1a2a31]  w-fit px-3 rounded-full m-1">
                Html
              </li>
              <li className="text-[#00E5FF] bg-[#1a2a31]  w-fit px-3 rounded-full m-1">
                Css
              </li>
              <li className="text-[#00E5FF] bg-[#1a2a31]  w-fit px-3 rounded-full m-1">
                JS
              </li>
              <li className="text-[#00E5FF] bg-[#1a2a31]  w-fit px-3 rounded-full m-1">
                React
              </li>
              <li className="text-[#00E5FF] bg-[#1a2a31]  w-fit px-3 rounded-full m-1">
                Vite
              </li>
              <li className="text-[#00E5FF] bg-[#1a2a31]  w-fit px-3 rounded-full m-1">
                Redux
              </li>
              <li className="text-[#00E5FF] bg-[#1a2a31]  w-fit px-3 rounded-full m-1">
                Responsive design
              </li>
            </ul>
          </div>

          <div className="bg-[#0f141a] rounded-lg p-3 lg:col-start-4 lg:row-start-1">
            <span className="block text-center text-[#FFD600] mb-2">
              Languages
            </span>
            <ul className="flex flex-wrap lg:block">
              <li className="text-[#FFD600] bg-[#272924] w-fit px-3 rounded-full m-1">
                Javascript
              </li>
              <li className="text-[#FFD600] bg-[#272924] w-fit px-3 rounded-full m-1">
                c++
              </li>
            </ul>
          </div>
          <div className="bg-[#0f141a] rounded-lg p-3 lg:col-span-2 lg:col-start-2 lg:row-start-1">
            <span className="block text-center text-[#BB86FC] mb-2">
              Styles
            </span>
            <ul className="flex flex-wrap lg:block">
              <li className="text-[#BB86FC] bg-[#202031] w-fit px-3 rounded-full m-1">
                Native css
              </li>
              <li className="text-[#BB86FC] bg-[#202031] w-fit px-3 rounded-full m-1">
                Tailwind css
              </li>
              <li className="text-[#BB86FC] bg-[#202031] w-fit px-3 rounded-full m-1">
                Bootstrap css
              </li>
              <li className="text-[#BB86FC] bg-[#202031] w-fit px-3 rounded-full m-1">
                styled components
              </li>
            </ul>
          </div>

          <div className="bg-[#0f141a] rounded-lg p-3 lg:col-start-2 lg:row-start-2">
            <span className="block text-center text-[#fc8686] mb-2">Tools</span>
            <ul className="flex flex-wrap lg:block">
              <li className="text-[#fc8686] bg-[#312020] w-fit px-3 rounded-full m-1">
                Git
              </li>
              <li className="text-[#fc8686] bg-[#312020] w-fit px-3 rounded-full m-1">
                GitHub
              </li>
              <li className="text-[#fc8686] bg-[#312020] w-fit px-3 rounded-full m-1">
                npm
              </li>
              <li className="text-[#fc8686] bg-[#312020] w-fit px-3 rounded-full m-1">
                vs code
              </li>
            </ul>
          </div>
          <div className="bg-[#0f141a] rounded-lg p-3 lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <span className="block text-center mb-2">Others</span>
            <ul>
              <li className="bg-gray-900 w-fit px-2 rounded-full m-1 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9,0_0_25px_#67e8f9]"></div>
                Experience working with APIs
              </li>
              <li className="bg-gray-900 w-fit px-2 rounded-full m-1 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc,0_0_25px_#c084fc]"></div>
                Basic experience in UI Design
              </li>
              <li className="bg-gray-900 w-fit px-2 rounded-full m-1 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_10px_#fb7185,0_0_25px_#fb7185]"></div>
                Quick to learn and adapt
              </li>
              <li className="bg-gray-900 w-fit px-2 rounded-full m-1 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_10px_#fde68a,0_0_25px_#fde68a]"></div>
                Efficient research & debugging with AI
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={50}
            gap={80}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#060010"
            ariaLabel="Technology partners"
          />
        </div>
      </AnimatedContent>
    </section>
  );
}

export default Skills;
