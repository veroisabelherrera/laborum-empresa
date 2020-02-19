import React from 'react';
import BasicInfo from '../components/Profile/BasicInfo';
import ContactInfo from '../components/Profile/ContactInfo';
import AboutCompany from '../components/Profile/AboutCompany';
// import { Prueba } from '../components/router';


const CreateProfile = () => {
  return (
    <div>
      <BasicInfo />
      <ContactInfo />
      <AboutCompany />
      {/* <Prueba></Prueba> */}
    </div>
  );
};

export default CreateProfile;
