import React from 'react';
import Sidebar from '../components/defaultComponents/Sidebar';
import Footer from '../components/defaultComponents/Footer';
import Header from '../components/defaultComponents/Header';
import ContainerInfo from '../components/defaultComponents/ContainerInfo';

const Home = () => (
  <div>
    <Header />
    <div className="col-12">
      <Sidebar />
      <ContainerInfo />
    </div>
    <div className="footer-container">
      <Footer />
    </div>

  </div>
);

export default Home;
