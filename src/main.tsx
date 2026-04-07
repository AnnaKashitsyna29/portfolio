import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/fonts/style.css";
import { App } from "./app/App";
import { ThemeProvider } from "./shared/lib/ThemeContext";
import { ScrollProvider } from "./common/context/ScrollContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ThemeProvider>
  </StrictMode>,
);
