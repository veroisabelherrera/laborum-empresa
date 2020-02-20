import React from 'react';
import './Content.css';
import CreateJobAnnouncement from '../../views/CreateJobAnnouncement';
import ManageAd from '../gestionAvisos/Avisos'

const Content = () => {
  return (
    <div className="col-9 container">
      <div>
        < ManageAd />
        {/* <CreateJobAnnouncement /> */}
      </div>
    </div>
  );
};

export default Content;
