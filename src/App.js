import './App.css';
import React from 'react';
import Graph from './components/Graph.js'
import YOYGraph from './components/YOYGraph.js'
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
          <Route path="/YearOverYear/" element={<YOYGraph />} />
          <Route path="/" element={<Graph />} />
        </Routes>
      </div>
    </Router>
	);
}
export default App
