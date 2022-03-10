import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Education from './Pages/Education';
import Programs from './Pages/Programs';
import Services from './Pages/Services';
import ServicesDetails from './Pages/ServicesDetails';
import OnlineFreeConsultation from "./Pages/OnlineFreeConsultation";
import Events from './Pages/Events';
import Universty from './Pages/Universty';
import Scholarship from './Pages/Scholarship';
import ScholarshipDetails from './Pages/ScholarshipDetails';
import UniverstyDetails from './Pages/UniverstyDetails';
import Business from './Components/Business/Business';
import Business__detail from './Components/Business__detail/Business__detail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education-services/" element={<Education />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:title" element={<ServicesDetails />} />
        <Route path="/services/online-free-consultation" element={<OnlineFreeConsultation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/universty" element={<Universty />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/scholarship/:title" element={<ScholarshipDetails />} />
        <Route path="/universty/:name" element={<UniverstyDetails />} />
        <Route path="/business-services/" element={<Business />} />
        <Route path="/business-detail" element={<Business__detail />} />
      </Routes>
      <div className="bg-transparent">
        <div className="table fixed w-[60px] h-[60px] cursor-pointer right-[20px] bottom-[10px] bg-[#2595b3] text-white z-[9995] fixed__btn">
          <div className="table-cell w-full h-full text-[23px] pt-[2px] pl-[2px] text-center text-white align-middle">
            <i class="bi bi-chat-left-text"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
