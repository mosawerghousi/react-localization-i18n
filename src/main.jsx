import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, DirectionProvider } from "@mantine/core";
import App from "./App";
import "./i18n"; // import i18n configuration
import "@mantine/core/styles.css"; // import Mantine core CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Enable routing */}
    <BrowserRouter>
      {/* Enable dynamic RTL/LTR switching */}
      <DirectionProvider>
        {/* Mantine theme provider with global styles */}
        <MantineProvider withNormalizeCSS withGlobalStyles>
          <App />
        </MantineProvider>
      </DirectionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
