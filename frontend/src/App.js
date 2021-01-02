import React from "react";
import Homescreen from "./Components/Homescreen"
import Header from "./Components/Header"
import Footer from "./Components/Footer" 
import {Container} from "react-bootstrap"
function App() {
  return (
    <>
    <Header/>
    <main className="py-3$ ">
    <Container>
    <Homescreen/>
    </Container>
     </main>
     <Footer/>
    </>
  );
}

export default App;
