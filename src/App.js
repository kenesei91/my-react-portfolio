import React from "react";
import Header from "./components/Header";
//import Footer from "./components/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="App">
       <Header />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
