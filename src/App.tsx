import React from "react";
import Benefits from "./components/Benefits";
import CustomPayments from "./components/CustomPayments";
import DelightCustomers from "./components/DelightCustomers";
import EasyPayment from "./components/EasyPayment";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Nav from "./components/navbar/Nav";
import Navbar from "./components/navbar/Navbar";
import Partners from "./components/Partners";
import Powering from "./components/Powering";
import TopFooter from "./components/TopFooter";
import Trusted from "./components/Trusted";
import { TryNow } from "./components/TryNow";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Nav />
      <HeroSection />
      <EasyPayment />
      <DelightCustomers />
      <CustomPayments />
      <Benefits />
      <Trusted />
      <Powering />
      <Partners />
      <TryNow />
      <TopFooter />
      <Footer />
    </div>
  );
};

export default App;
