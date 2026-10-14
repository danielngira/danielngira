import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SiteExperience from "./SiteExperience.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiteExperience />
  </StrictMode>,
);
