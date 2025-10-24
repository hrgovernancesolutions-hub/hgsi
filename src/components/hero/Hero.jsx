import heroBg from '../../assets/hero3.png';
import './Hero.css';

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${heroBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1>HR Governance Solutions</h1>
      <p>
          Proudly serving as the <span className="highlight">India Service Center</span> for{' '}
          <a
            href="https://workforcejunction.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="wj-link"
          >
            Workforce Junction
          </a> - delivering innovation, compliance, and excellence.
        </p>
        <a
          href="https://workforcejunction.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Explore Workforce Junction
        </a>
    </section>
  );
}

export default Hero;
