export const HomeLogo = () => {
  return (
    <div className="home_logo">
      <span />
      <svg viewBox="0 0 200 200">
        <path
          id="curve"
          fill="transparent"
          d="M 100, 100
          m -75, 0
          a 75,75 0 1,0 150,0
          a 75,75 0 1,0 -150,0"
        />
        <path id="line" fill="black" d="M 65 120 L 500 60" />
        <text>
          <textPath className="svg_curve" xlinkHref="#curve">
            ⚫ GOURMET EXPERIENCE ⚫ GOURMET EXPERIENCE
          </textPath>
        </text>
        <text>
          <textPath className="svg_line" xlinkHref="#line">
            LOGO
          </textPath>
        </text>
      </svg>
    </div>
  );
};
