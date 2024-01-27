import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { GoGraph } from 'react-icons/go'
import { SlGraph } from "react-icons/sl";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes
} from "react-router-dom";

const sideBar = () => {
	return (
	<Sidebar>
		<Menu>
			<SubMenu label="The Data">
				<MenuItem 
					component={<Link to="/"/>}
					icon = <GoGraph/>
				> 
					Basic Time-Series 
				</MenuItem>
				<MenuItem 
					component={<Link to="/YearOverYear"/>}
					icon=<SlGraph />
				>
					Year over Year 
				</MenuItem>
			</SubMenu>
			<MenuItem component={<Link to="/about"/>}> About </MenuItem>
		</Menu>
	</Sidebar>
	)
}

export default sideBar;
