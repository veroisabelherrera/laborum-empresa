import React from 'react';
import AddjobForm from '../CreateJob/CreateJob';
import './ContainerInfo.css';

const ContainerInfo = () => {
  return (
    <section className="content col-9">
			<div className="col-12">
			<div className="col-8">
        <AddjobForm />
      </div>
      <div className="avisos-frecuentes col-4">
				<p>Avisos frecuentes</p>
			</div>
			</div>
      
    </section>
  );
};

export default ContainerInfo;
