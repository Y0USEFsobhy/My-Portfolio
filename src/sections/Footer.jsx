import Particles from "../library/Particles";
function Footer(){
  return (
       <footer className="w-full h-30 relative" >
        <Particles
          particleColors={["#ffffff"]}
          particleCount={100}
          particleSpread={20}
          speed={0.5}
          particleBaseSize={200}
          // moveParticlesOnHover
          alphaParticles={false}
          disableRotation={true}
          pixelRatio={10}
          className={"z-10 pointer-events-none"}
        />
        <p className="text-[#00bcd4] font-bold absolute top-1/2 left-1/2 -translate-1/2 md:text-2xl text-sm text-center">© 2026 Yousef
Designer & Front-End Developer</p>
    </footer>
  );
};
// 00bcd4
export default Footer;