import './App.css';
import React from 'react';
import Graph from './components/Graph.js'
import YOYGraph from './components/YOYGraph.js'
import About from './pages/about.js'
import Sidebar from './components/sidebar.js'
import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";

function App(){
	return (
		 <Router>
      <div className="app-container">
				<div className="sidebar-container">
					<Sidebar/>
				</div >
				<div className="main-content">
        <Routes>
          <Route path="/about/" element={<About />} />
          <Route path="/YearOverYear/" element={<YOYGraph />} />
          <Route path="/" element={<Graph />} />
        </Routes>
      </div>
      </div>
    </Router>
	);
}
export default App
