import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Blog from './components/Blog';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import DownloadBrochure from './components/DownloadBrochure';
import Programs from './components/Programs';
import BlogAi from './components/BlogAi';
import BlogWhyAi from './components/BlogWhyAi';
import BlogAp from './components/BlogAp';
import BlogGen from './components/BlogGen';
import Workshop from './components/Workshop';
import MyAccount from './components/MyAccount';
import Courses from './components/Courses';
import CoursesResume from './components/CoursesResume';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/ai" element={<BlogAi />} />
          <Route path="/blog/whyai" element={<BlogWhyAi />} />
          <Route path="/blog/applications" element={<BlogAp />} />
          <Route path="/blog/genai" element={<BlogGen />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/download-brochure" element={<DownloadBrochure />} />
          {/* <Route path="/Workshop" element={<Workshop />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/Myaccount/Courses" element={<Courses />} />
          <Route path="/Myaccount/CoursesResume" element={<CoursesResume />} />
          

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
