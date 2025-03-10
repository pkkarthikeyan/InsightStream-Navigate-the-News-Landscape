import React, { Component } from 'react';
import Loading from './components/Loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" >
        <img src={Loading} alt="Loading" className="img-fluid" style={{ width: '70px', height: '70px' }} />
      </div>
    );
  }
}

export default Spinner;
