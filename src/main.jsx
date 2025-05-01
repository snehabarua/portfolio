import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShootingStars from "./components/ui/shooting-stars.jsx";
import StarsBackground from "./components/ui/stars-background.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<div className=" w-full relative min-h-screen">

      <StarsBackground />
      <ShootingStars />
 

      <App />
</div>
 
  </StrictMode>
);
