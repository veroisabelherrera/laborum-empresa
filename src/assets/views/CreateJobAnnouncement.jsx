import React from 'react';
import AboutJob from '../components/CreateJob/AboutJob';
import '../../App.css';
import './CreateJobAnnouncement.css';
import ApplicantJob from '../components/CreateJob/ApplicantJob';
import DateRangeJob from '../components/CreateJob/DateRangeJob';
// import { Prueba } from '../components/router';


const CreateJobAnnouncement = () => {
  return (
    <div className="create-job-view col-12">
      <section className="container-title col-12">
        Estás creando un aviso
      </section>
      <section className="announcement-container">
      <div className="job-container col-8">
        <AboutJob />
      </div>
      <div className="frecuent-job-container col-3">
        Avisos frecuentes
      </div>
      </section>
    </div>
  );
};

export default CreateJobAnnouncement;
