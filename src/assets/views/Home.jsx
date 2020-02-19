import React from 'react';
import Sidebar from '../components/defaultComponents/Sidebar';
import Footer from '../components/defaultComponents/Footer';
import Header from '../components/defaultComponents/Header';
import Content from '../components/defaultComponents/Content';
// import ContainerInfo from '../components/defaultComponents/ContainerInfo';
// // import CreateProfile from '../views/CreateProfile';
// import CreateJobAnnouncement from '../views/CreateJobAnnouncement';

const Home = () => (
  <div className="col-12">
    <Header />
    <Sidebar />
    <Content/>
    <Footer />
  </div>
);

export default Home;
