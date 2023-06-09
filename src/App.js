import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experiencepage from "./pages/Allpage/Experiencepage/Experiencepage";
import Projectspage from "./pages/Allpage/ProjectsPage/Projectspage";

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={10}
        outerSize={18}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <Router>
        <Header />
        <Routes>
          <Route path="/experience" Component={Experiencepage} />

          <Route path="/projects" Component={Projectspage} />
          <Route exact path="/" Component={Homepage} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
