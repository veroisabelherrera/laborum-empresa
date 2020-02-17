import React from 'react';
import Sidebar from '../components/defaultComponents/Sidebar';
import Footer from '../components/defaultComponents/Footer';
import Header from '../components/defaultComponents/Header';

const Home = () => (
  <div>
    <Header />
    <Sidebar />
    <div className="footer-container">
      <Footer />
    </div>

  </div>
);

export default Home;
