import React, { useState, useEffect} from 'react';
import db from '../../../firebase-config';

function JobsView() {
let [jobs, setJobs] = useState([])
useEffect(() => {
  db
  .collection("jobs")
  .onSnapshot((snapshot) => {
    const newJobs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    setJobs(jobs = newJobs)
  })
}, [])
const deleteJob = () => {
    db.collection('jobs')
    console.log("hola" + jobs)
    .doc(jobs.id).delete()
  }

  return (
    <div>
{jobs.map((Jobs) =>
<div>
      <h3>{Jobs.title}</h3>
      <p>{Jobs.description}</p>
      <p>{Jobs.benefits}</p>
      <p>{Jobs.date}</p>
      <p>{Jobs.region}</p>
      <p>{Jobs.city}</p>
      <p>{Jobs.comuna}</p>
      <p>{Jobs.contracType}</p>
      <p>{Jobs.inclusion}</p>
      <p>{Jobs.rent}</p>
      <p>{Jobs.workday}</p>
      <p>{Jobs.web}</p>
    <div>
    <button onClick={deleteJob}>Eliminar</button>
      </div>
      </div>
      )}    
      </div>
  )
}

export default JobsView;