import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Habilidades from "./components/habilidades/Habilidades";
import Contacto from "./components/contacto/Contacto"
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [clickMe, setClickMe] = React.useState(false);


  return (
    <main>
      <Navbar />
      <Header clickMe={clickMe} setClickMe={setClickMe} />
      <Habilidades />
      <Contacto />
      <Footer clickMe={clickMe} setClickMe={setClickMe} />
    </main>
  );
}

export default App;
