import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomeScreen from './pages/HomeScreen'
import AboutScreen from './pages/AboutScreen'
import CareersScreen from './pages/CareersScreen'
import NewBlogScreen from './pages/NewBlogScreen'
import ContactScreen from './pages/ContactScreen'
import Header from './components/Header';
import TeamScreen from './pages/TeamScreen';
import WhyOrcimedScreen from './pages/WhyOrcimedScreen';
import MissionVision from './pages/MissionVision';
import ServicesScreen from './pages/servicesScreens/ServicesScreen';
import ServiceReadMore from './pages/servicesScreens/ServiceReadMore';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Profileinfo from './pages/Profileinfo';
import Doctors from './components/Doctors';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header />
        <div className='content'>
        <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<AboutScreen />} />
            <Route path='/careers' element={<CareersScreen />} />
            {/* <Route path='/news-blog' element={<NewBlogScreen />} /> */}
            <Route path='/contact' element={<ContactScreen />} />
            <Route path='/team' element={<TeamScreen />} />
            <Route path='/why-orcimed' element={<WhyOrcimedScreen />} />
            <Route path='/mission-vision' element={<MissionVision />} />
            <Route path='/services' element={<ServicesScreen />} />
            <Route path='/:id' element={<ServiceReadMore />} />
            <Route path='/doctor' element={<Doctors />} />
            <Route path='/doctor/:id' element={<Profileinfo />} />
          </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
