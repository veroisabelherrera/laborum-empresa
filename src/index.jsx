import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Form from './componets/Forms';

import firebaseConfig from './firebase-config';

ReactDOM.render((
<<<<<<< HEAD:src/index.jsx
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback="Conectando a la app">
      <App />
    </Suspense>
  </FirebaseAppProvider>
=======
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={'Conectando a la app'}>
            <App />
            <Form />
        </Suspense>
    </FirebaseAppProvider>
    
>>>>>>> a822cc426062c38c8c6db5f30188e1041819f6e7:src/index.js
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
