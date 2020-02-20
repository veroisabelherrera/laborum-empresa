import React, { useState, useEffect} from 'react';
import db from '../../../firebase-config';

function GetProfile() {
let [profile, setProfile] = useState([])

useEffect(() => {
  db
  .collection("profileCompany")
  .onSnapshot((snapshot) => {
    const newProfile = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    setProfile(profile = newProfile)
  })
}, [])
return profile 
}

const ProfileView = () => {
const profile = GetProfile()
  return (
    <div>
{profile.map((profile) =>
<div>
      <h3>{profile.title}</h3>
      <p>{profile.description}</p>
      <p>{profile.benefits}</p>      
      <p>{profile.date}</p>
      <p>{profile.region}</p>
      <p>{profile.city}</p>
      <p>{profile.comuna}</p>
      <p>{profile.contracType}</p>
      <p>{profile.inclusion}</p>
      <p>{profile.rent}</p>
      <p>{profile.workday}</p>
      <p>{profile.web}</p>
    <div>
      </div>
      </div>
      )}

    </div>
  )
}

export default ProfileView;
