import React, { Component } from 'react';
import Loading from './components/Loading.gif';

const Spinner = ()  => {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <img src={Loading} alt="Loading" className="img-fluid" style={{ width: '70px', height: '70px' }} />
      </div>
    );
  }


export default Spinner;
