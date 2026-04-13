import BorderGlow from "../library/BorderGlow";
function BorderGlowProjects({children,className}) {
  return (
    <BorderGlow
      edgeSensitivity={80}
      glowColor="40 80 80"
      // backgroundColo#6617e4010"
      backgroundColor="#130b1f"
      borderRadius={14}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={true}
      colors={["#c084fc", "#f472b6", "#38bdf8"]}
      className={`overflow-hidden ${className}`}
    >
        {children}
    </BorderGlow>
  );
}

export default BorderGlowProjects;
