import React, { useState, useEffect } from 'react';
import db from '../../../firebase-config';
import '../../../App.css';
import './Avisos.css';
import logo from '../../img/Rosa.png';
import clock from '../../img/Exclude.png';
import briefcase from '../../img/Vector2.png';
import trash from '../../img/Activo.png';
import seemore from '../../img/See more.png';

function JobsView() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    db
      .collection("newJobAnnouncement")
      .onSnapshot((snapshot) => {
        const newJobs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setJobs(newJobs)
      })

  }, [])
  const deleteJob = (deleteId) => {
    db.collection('newJobAnnouncement').doc(deleteId).delete()
  }

  return (
    <div>
      <section className="job-box col-12">
        {jobs.map((Jobs) =>
          <div className="job-offer col-3">
            <div className="logo-status-location">
              <img className="logoSize"
                src={logo}
                alt="Logo empresa" />
              <button className="job-status">Aprobado</button>
            </div>
            <p className="job-title">{Jobs.jobName}</p>
            <p className="job-description">{Jobs.jobDescription}</p>
            <div className="iconPlace">
              <div className="iconLocation">
                <img className="clockIcon"
                  src={clock}
                  alt="reloj" />
                <p className="job-time">Hace 3 horas</p>
              </div>
              <div className="iconLocation">
                <img className="briefcaseIcon"
                  src={briefcase}
                  alt="maletin" />
                <p className="job-time">{Jobs.workDay}</p>
              </div>
            </div>
            <div className="iconPlace2">
              <svg className="star-icon2" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4999 4.52023L9.36976 3.93543L7.52487 0.291391C7.47123 0.202653 7.39475 0.129094 7.30299 0.077988C7.21123 0.0268822 7.10737 0 7.00167 0C6.89598 0 6.79212 0.0268822 6.70036 0.077988C6.6086 0.129094 6.53212 0.202653 6.47848 0.291391L4.63009 3.93543L0.499945 4.52023C0.392238 4.53538 0.291028 4.57958 0.207758 4.64785C0.124488 4.71611 0.0624786 4.80571 0.02874 4.90652C-0.00499854 5.00733 -0.0091204 5.11532 0.0168404 5.21829C0.0428012 5.32126 0.0978094 5.4151 0.175646 5.48921L3.16491 8.32738L2.45974 12.3357C2.44136 12.4402 2.45336 12.5477 2.49437 12.6459C2.53539 12.7441 2.60379 12.8292 2.69184 12.8915C2.77989 12.9538 2.88408 12.9909 2.99262 12.9985C3.10117 13.0062 3.20974 12.9841 3.30606 12.9347L6.99992 11.0428L10.6938 12.9347C10.7901 12.9841 10.8987 13.0062 11.0072 12.9985C11.1158 12.9909 11.22 12.9538 11.308 12.8915C11.3961 12.8292 11.4645 12.7441 11.5055 12.6459C11.5465 12.5477 11.5585 12.4402 11.5401 12.3357L10.8349 8.32738L13.8242 5.48921C13.902 5.41518 13.957 5.32143 13.9831 5.21854C14.0091 5.11565 14.0051 5.00773 13.9715 4.90695C13.9378 4.80617 13.876 4.71655 13.7929 4.64822C13.7098 4.57988 13.6087 4.53555 13.5011 4.52023H13.4999Z" fill="#CEF8ED" />
              </svg>
              <button className="trash" onClick={() => { deleteJob(Jobs.id) }}><img
                src={trash}
                alt="Eliminar" /></button>
              <button className="seeMore">
                <img src={seemore} alt="Ver más" /></button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}


export default JobsView;
