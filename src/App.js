
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route,Routes,} from "react-router-dom";
import About from './components/About';
import { Error } from './Error';
import { MainHeader } from './components/MainHeader';
import CapitalText from './extra/CapitalText';
import { MainPage } from './components/MainPage';
import { Todolist } from './components/Todolist';
function App() {

  return (
    <>
      <Router>
        <MainHeader />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/todolist' element={<Todolist/>} />
          <Route path='/about' element={<About />} />
          <Route path='/upper' element={<CapitalText />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
