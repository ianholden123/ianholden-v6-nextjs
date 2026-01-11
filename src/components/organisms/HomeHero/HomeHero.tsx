import "./HomeHero.css";

export const HomeHero = () => (
  <div
    className="hero"
    style={{ backgroundImage: `url("/ianHero.jpeg")` }}
  >
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <div className="hero-content-inner">
        <h1 className="hero-title">
          Ian Holden
        </h1>
        <p className="hero-subtitle">Software Engineer</p>
      </div>
    </div>
  </div>
);
