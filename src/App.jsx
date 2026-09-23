import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
