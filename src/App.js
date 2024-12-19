import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Work1 from "./components/Work1";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

const App = () => {
  return <div>
      <Header />
      <Home />
      <Work1 />
      <Work />
      <About />
      <Projects />
      <Contact />
  </div>;
};

export default App;