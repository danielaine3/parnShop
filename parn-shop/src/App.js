import React from "react";
import { HeaderComponent } from "./header/header-component";
import "./App.css";
import { FooterComponent } from "./footer/footer-component";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
