import './scss/main.scss';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Review } from './Review';
import { Contact } from './Contact';
import { Footer } from './Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
