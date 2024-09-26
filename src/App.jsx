
import './App.css'
import Navbar from './Components/Navbar'
import HomeHero from './Components/HomeHero'
import About from './Components/About'
function App() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  return (
    <>
      <div className='index-content'>
        <Navbar />
        <HomeHero />
        <About />
      </div>
    </>
  )
}

export default App
