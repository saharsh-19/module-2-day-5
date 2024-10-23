
import './App.css';
//import CustomButton from './components/CustomButton'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx"
import News from "./Pages/News.jsx"
import Contact from "./Pages/Contact.jsx"
import Aboutus from "./Pages/Aboutus.jsx"
import Error from "./Pages/Error.jsx"
import Product from "./Pages/Product.jsx"
import MyCounter from './Pages/MyCounter.jsx';
import Random from './Pages/Random.jsx'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
        <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/product' element={<Product />} />
          <Route path='/mycounter' element={<MyCounter />} />
          <Route path='/random' element={<Random />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
