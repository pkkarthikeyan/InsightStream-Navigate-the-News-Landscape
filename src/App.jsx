import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {

 apiKey = "your_actual_api_key_here";
;
 
  render() {
    return <div> 
      <Router>
      <Navbar/>
      <Routes>
         <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={16} country="us" category="general"/>}/>
         <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={16} country="us" category="business"/>}/>
         <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={16} country="us" category="entertainment"/>}/>
         <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={16} country="us" category="health"/>}/>
         <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={16} country="us" category="science"/>}/>
         <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={16} country="us" category="sports"/>}/>
         <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={16} country="us" category="technology"/>}/>
    
      </Routes>
      </Router>
    </div>;
  }
}

export default App;