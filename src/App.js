import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portofilo";
import Blog from "./pages/Blog";
import About from "./pages/About";
import logo from "./logo.svg";
import ResponsiveNavigation from "./components/ResponsiveNavigation";

function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/",
      icon: "home",
    },
    {
      text: "Contact",
      path: "/contact",
      icon: "megaphone",
    },
    {
      text: "About",
      path: "/about",
      icon: "business",
    },
    {
      text: "Blog",
      path: "/blog",
      icon: "bonfire",
    },
    {
      text: "Portfolio",
      path: "/portfolio",
      icon: "briefcase",
    },
  ];
  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
      />
      <Router>
        <Contact path="/contact" />
        <Home path="/home" />
        <Portfolio path="/portfolio" />
        <About path="/about" />
        <Blog path="/blog" />
      </Router>
    </div>
  );
}

export default App;
