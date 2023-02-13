export const HomeHero = () => (
  <div
    className="hero min-h-screen"
    style={{ backgroundImage: `url("/ian.jpeg")` }}
  >
    <div className="hero-overlay bg-opacity-80"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-6xl font-bold tracking-tight uppercase">
          Ian Holden
        </h1>
        <p className="mb-5 text-3xl leading-8 uppercase">Software Engineer</p>
      </div>
    </div>
  </div>
);
