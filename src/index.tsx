import App from "./App";
import { createRoot } from "react-dom/client";
import "./i18n";

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}
