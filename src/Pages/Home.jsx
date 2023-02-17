import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
