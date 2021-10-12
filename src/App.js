import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Cards from "./Components/Cards";
import Jobs from "./Components/Jobs";
import Introduction from "./Components/Introduction";
import Resume from "./Components/Resume";
import Faq from "./Components/Faq";

function App() {
  return (
    <div className=" min-h-screen font-serif">
      <Nav />
      <Main />
      <Cards />
      <Jobs />
      <Introduction />
      <Resume />
      <Faq />
    </div>
  );
}

export default App;
