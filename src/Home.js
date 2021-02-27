import './Home.css';

function Home() {
  return (
    <section style={{ backgroundImage: 'url(/media/darton.jpg)' }}>
      <div className='overlay'>
        <div className='hero-text-container'>
          <h1 className='hero-text'>Darton Hemerik</h1>
          <h3 className='hero-text'>Web Developer in the Making</h3>
        </div>
      </div>
    </section>
  );
}

export default Home;
