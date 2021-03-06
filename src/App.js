import React from "react";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Cards from "./Components/Cards";
import Jobs from "./Components/Jobs";
import Introduction from "./Components/Introduction";
import Resume from "./Components/Resume";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";
import SignupForm from "./Components/SignupForm";

function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen" style={{ fontFamily: "Vazir" }}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Nav />
          <Main />
          <Cards />
          <Jobs />
          <Introduction />
          <Resume />
          <FAQs />
          <Footer />
        </Route>
        <Route path="/sign-up">
          <SignupForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
