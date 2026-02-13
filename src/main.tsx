import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./Index/Index.tsx";
import AppProvider from "./Index/context/AppProvider.tsx";
import Launchpad from "./System/index.tsx";
import Provider from "./System/Provider.tsx";
import "./Style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppProvider>
              <Index />
            </AppProvider>
          }
        />
        <Route path="/system">
          <Route
            path="dashboard"
            element={
              <Provider>
                <Launchpad />
              </Provider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
