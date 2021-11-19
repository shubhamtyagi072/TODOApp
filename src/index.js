import React from 'react';
import ReactDom from 'react-dom'
import Router from './component/Routes/Routes'

 
ReactDom.hydrate((
    <React.StrictMode>
        <Router />
    </React.StrictMode>
),document.querySelector('#root'))