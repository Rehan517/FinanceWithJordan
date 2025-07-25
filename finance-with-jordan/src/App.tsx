import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Calculators from '@/pages/Calculators';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<div className="py-20 text-center"><h1 className="text-3xl font-bold">Privacy Policy - Coming Soon</h1></div>} />
          <Route path="/terms" element={<div className="py-20 text-center"><h1 className="text-3xl font-bold">Terms of Service - Coming Soon</h1></div>} />
          <Route path="/disclaimer" element={<div className="py-20 text-center"><h1 className="text-3xl font-bold">Disclaimer - Coming Soon</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
