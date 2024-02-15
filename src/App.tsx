import React from "react";
import "./App.css";

import Main from "./components/Wrapper";
import GridContainer from "./components/GridContainer";
import Navbar from "./components/navbar";
import PartnersTab from "./components/partnersTab";
import NextTab from "./components/nextTab";
import CarrierTab from "./components/carriersTab";
import Footer from "./components/footer";
import MainContent from "./components/MainContent";
import { AppStateProvider } from "./components/stateContext";

function App() {
  return (
    <Main>
      <GridContainer>
        <AppStateProvider>
          <Navbar />
        </AppStateProvider>
        <PartnersTab></PartnersTab>
        <NextTab></NextTab>
        <MainContent></MainContent>
        <CarrierTab></CarrierTab>
      </GridContainer>
      <Footer />
    </Main>
  );
}

export default App;
