import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/element";
import {
  Home,
  About,
  Services,
  Contact,
  Careers,
  Freelancer,
  PartnerDetail,
  ClientDetail,
  NotFound,
} from "./pages";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/freelancer" element={<Freelancer />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/clients/:clientId" element={<ClientDetail />} />
            <Route path="/partners/:partnerId" element={<PartnerDetail />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
