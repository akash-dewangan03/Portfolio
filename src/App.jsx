import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import BgView from './components/BackgroundView';

function App() {
  return (
    
    <div className="content">
      
        <div>
        <Navbar />
        <Home />
        <BgView></BgView>
        <About />
        <Skill />
        <Contact />
        </div>
      {/* </BgView> */}
    </div>
  );
}

export default App;
