import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ImageAnnotation from "./pages/ImageAnnotation";
import VideoAnnotation from "./pages/VideoAnnotation";
import AudioAnnotation from "./pages/AudioAnnotation";
import NaturalLanguageProcessing from "./pages/NaturalLanguageProcessing";
import Lidar3DAnnotation from "./pages/Lidar3DAnnotation";
import MultimodalAnnotation from "./pages/MultimodalAnnotation";
import DataClassification from "./pages/DataClassification";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import AutonomousVehicles from './pages/AutonomousVehicles';
import MedicalHealthcare from './pages/MedicalHealthcare';
import ECommerceRetail from './pages/ECommerceRetail';
import MediaEntertainment from './pages/MediaEntertainment';
import EducationEdtech from './pages/EducationEdtech';
import Manufacturing from './pages/Manufacturing';
import Agriculture from './pages/Agriculture';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="font-sans antialiased text-slate-900 bg-white overflow-x-hidden">
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/image-annotation" element={<ImageAnnotation />} />
        <Route path="/services/video-annotation" element={<VideoAnnotation />} />
        <Route path="/services/audio-annotation" element={<AudioAnnotation />} />
        <Route path="/services/nlp-datasets" element={<NaturalLanguageProcessing />} />
        <Route path="/services/lidar-3d" element={<Lidar3DAnnotation />} />
        <Route path="/services/multimodal-annotation" element={<MultimodalAnnotation />} />
        <Route path="/services/data-classification" element={<DataClassification />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />
        <Route path="/industries/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/industries/autonomous-vehicles" element={<AutonomousVehicles />} />
        <Route path="/industries/healthcare-lifesciences" element={<MedicalHealthcare />} />
        <Route path="/industries/ecommerce-retail" element={<ECommerceRetail />} />
        <Route path="/industries/media-entertainment" element={<MediaEntertainment />} />
        <Route path="/industries/education-edtech" element={<EducationEdtech />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/agriculture" element={<Agriculture />} />
      </Routes>
      {!isAdmin && <Footer />}
    </div>
  );
}

export default App;

