import { FC } from "react";
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
  </>
);

const maintenance = false;
const App: FC = () => {
  if (maintenance) {
    return <Maintenance />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {error}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
