import Navbar from "./sections/Navbar";
import Header from "./sections/Header";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import WorkExperience from "./sections/WorkExperience";
import Education from "./sections/Education";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Services />
      <WorkExperience />
      <TechStack />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
