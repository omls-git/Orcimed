import './App.css';
import { Route, HashRouter, Routes, BrowserRouter } from "react-router-dom";
import HomeScreen from './pages/HomeScreen'
import AboutScreen from './pages/AboutScreen'
import ServicesScreen from './pages/ServicesScreen'
import CareersScreen from './pages/CareersScreen'
import NewBlogScreen from './pages/NewBlogScreen'
import ContactScreen from './pages/ContactScreen'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<AboutScreen />} />
            <Route path='/services' element={<ServicesScreen />} />
            <Route path='/careers' element={<CareersScreen />} />
            <Route path='/news-blog' element={<NewBlogScreen />} />
            <Route path='/contact' element={<ContactScreen />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
