import React from "react";
import Service from "./components/Service/Service";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div  className="App">
      <Header/>
      <Service/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
