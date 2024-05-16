import { FC, useMemo } from "react";
import "./app.scss";

import Maintenance from "./components/Errors/Maintenance";
import ServiceUnavailable from "./components/Errors/ServiceUnavailable";
import UnknownError from "./components/Errors/UnknownError";
import NotFound from "./components/Errors/NotFound";

import Home from "./pages/Home";
import Projects from "./pages/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./pages/Education";

const error = (
  <>
    <Route path="/503" element={<ServiceUnavailable />} />
    <Route path="/error/:reason" element={<UnknownError />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<NotFound />} />
  </>
);

const maintenance = false;
const App: FC = () => {
  const forceSee = useMemo(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);

    return params.get("force-see") === "true";
  }, []);

  if (maintenance && !forceSee) {
    return (
      <BrowserRouter>
        <Routes>
          {error}
          <Route path="/" element={<Maintenance />} />
          <Route path="/projects" element={<Maintenance />} />
          <Route path="/education" element={<Maintenance />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {error}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
