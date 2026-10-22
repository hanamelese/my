import Header from "./Header";
import Home from "./Home";
import Certificate from "./Certificate";
import Work from "./Work";
import Contact from "./Contact";
import Experience from "./Experience";

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="certificate">
        <Certificate />
      </section>
      <section id="experience">
        <Experience />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
