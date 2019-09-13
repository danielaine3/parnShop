import React from "react";
import { HeaderComponent } from "./header/header-component";
import "./App.css";
import { FooterComponent } from "./footer/footer-component";
import { NavbarComponent } from "./navbar/navbar-component";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeaderComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
