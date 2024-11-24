import { FC, useMemo } from "react";
import "./app.scss";

import Maintenance from "./components/Errors/Maintenance";
import ServiceUnavailable from "./components/Errors/ServiceUnavailable";
import UnknownError from "./components/Errors/UnknownError";
import NotFound from "./components/Errors/NotFound";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {error}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
