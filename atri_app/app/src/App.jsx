import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Service from "./pages/Service.jsx";
import Projects from "./pages/Projects.jsx";
import Blogs from "./pages/Blogs.jsx";
import ProductDesigner from "./pages/Product designer.jsx";
import Education from "./pages/Education.jsx";
import Gk from "./pages/Gk.jsx";
import Faq from "./pages/Faq.jsx";
import Last from "./pages/Last.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/service" element={<Service />} />
<Route path="/projects" element={<Projects />} />
<Route path="/blogs" element={<Blogs />} />
<Route path="/product designer" element={<ProductDesigner />} />
<Route path="/education" element={<Education />} />
<Route path="/gk" element={<Gk />} />
<Route path="/faq" element={<Faq />} />
<Route path="/last" element={<Last />} />
    </Routes>
  );
}
