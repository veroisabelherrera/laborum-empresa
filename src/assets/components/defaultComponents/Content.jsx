import React from 'react';
import './Content.css';
import CreateJobAnnouncement from '../../views/CreateJobAnnouncement';

const Content = () => {
  return (
    <div className="col-8 container">
      <div>
        <CreateJobAnnouncement />
      </div>
    </div>
  );
};

export default Content;
