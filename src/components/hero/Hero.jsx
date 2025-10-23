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
      <p>Your trusted partner for strategic HR solutions, compliance management, and organizational excellence.</p>
    </section>
  );
}

export default Hero;
