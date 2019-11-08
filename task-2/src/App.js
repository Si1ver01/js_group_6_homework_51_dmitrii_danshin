import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header.jsx";
import Firscontainer from "./components/firstContainer/firstContainer.jsx";
import Secondcontainer from "./components/secondContainer/secondContainer.jsx";
import Thirdcontainer from "./components/thirdContainer/thirdContainer.jsx";
import Fourcontainer from "./components/fourContainer/fourContainer.jsx";
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <Firscontainer />
      <Secondcontainer />
      <Thirdcontainer />
      <Fourcontainer />
      <Footer />
    </Fragment>
  );
}

export default App;
