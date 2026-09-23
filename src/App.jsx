import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import { clearLayoutCache } from "./utils/layoutMemory.js";

export default function App() {
  const location = useLocation();
  // Lives here (not in Home) because Home fully unmounts/remounts when
  // navigating to a project and back, due to the AnimatePresence page
  // transitions below. Keeping it in the parent lets it survive that.
  const [filter, setFilter] = useState("all");

  function handleFilterChange(value) {
    // An explicit filter press is the only thing allowed to re-randomize
    // that filter's card layout — clear its cache entry so ProjectsGrid
    // regenerates it fresh.
    clearLayoutCache(value);
    setFilter(value);
  }

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Home filter={filter} onFilterChange={handleFilterChange} />}
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
