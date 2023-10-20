import About from './about/page';
import Contact from './contact/page';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is the homepage of your Next.js app.</p>
      
      <About />
      <Contact />
    </div>
  );
}

export default HomePage;
