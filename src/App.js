import './App.css';
import React from 'react';
import Plot from 'react-plotly.js';
import Graph from './components/Graph.js'
import About from './pages/about.js'
import Sidebar from './components/sidebar.js'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes
} from "react-router-dom";


function App(){
	return (
		 <Router>
      <div className="app-container">
				<Sidebar/>
        <Routes>
          <Route path="/about/" element={<About />} />
          <Route path="/YearOverYear/" element={<YearOverYear />} />
          <Route path="/" element={<Graph />} />
        </Routes>
      </div>
    </Router>
	);
}


function YearOverYear() {
  return <h2>THIS IS WHERE YEAR OVER YEAR WILL BE</h2>;
}

export default App
