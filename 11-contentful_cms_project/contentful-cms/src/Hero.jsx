import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Hell of snackwave jean shorts, mixtape letterpress truffaut gentrify
            la croix tofu. Air plant keffiyeh wolf, solarpunk ascot jawn
            heirloom deep v cloud bread. Mustache bushwick farm-to-table
            wayfarers trust fund church-key lyft microdosing.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
