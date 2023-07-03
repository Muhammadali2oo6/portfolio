import Footer from './components/footer/Footer.jsx';
import About from './components/header/About.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Work from './components/work/Work.jsx';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <About/>
       <Work/>
       <Footer/>
    </div>
  );
}

export default App;
