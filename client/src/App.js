import React from "react";
import "./App.css";
import InputBox from "./components/InputBox.js";
import Footer from "./components/Footer.js";
import Title from "./components/Title.js";
import Description from "./components/Description.js";

function App() {
  return (
    <>
      <div className="container">
        <Title />
        <Description />
        <InputBox />
      </div>
      <Footer />
    </>
  );
}

export default App;
