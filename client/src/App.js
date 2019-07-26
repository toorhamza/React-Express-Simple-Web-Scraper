import React from 'react';
import './App.css';
import InputBox from "./components/inputBox.js";
import Footer from "./components/footer.js";
import Title from "./components/title.js";
import Description from "./components/description.js"

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
