import './App.css';
import React from 'react';
import Plot from 'react-plotly.js';
import Graph from './components/Graph.js'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes
} from "react-router-dom";

import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';

function App(){
	return (
		 <Router>
      <div className="app-container">
				<Sidebar>
					<Menu>
						<SubMenu label="The Data">
							<MenuItem component={<Link to="/"/>}> Basic Time-Series </MenuItem>
							<MenuItem component={<Link to="YearOverYear"/>}> Year over Year </MenuItem>
						</SubMenu>
						<MenuItem component={<Link to="/about"/>}> About </MenuItem>
					</Menu>
				</Sidebar>
        <Routes>
          <Route path="/about/" element={<About />} />
          <Route path="/YearOverYear/" element={<YearOverYear />} />
          <Route path="/" element={<Graph />} />
        </Routes>
      </div>
    </Router>
	);
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function YearOverYear() {
  return <h2>THIS IS WHERE YEAR OVER YEAR WILL BE</h2>;
}

export default App
