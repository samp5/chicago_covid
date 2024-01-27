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

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

function App(){
	return (
		 <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Graph</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about/" element={<About />} />
          <Route path="/users/" element={<Users />} />
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

function Users() {
  return <h2>Users</h2>;
}

export default App
