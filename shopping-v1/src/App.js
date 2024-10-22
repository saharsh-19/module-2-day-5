
import './App.css';
import CustomButton from './components/CustomButton'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx"
import News from "./Pages/News.jsx"
import Contact from "./Pages/Contact.jsx"
import Aboutus from "./Pages/Aboutus.jsx"
import Error from "./Pages/Error.jsx"

function App() {
  return (
    <div >
      <Navbar/>
      <br></br>
      <h1>Use navigation bar</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
