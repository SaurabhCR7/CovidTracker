import './style.css';

function Navbar(props) {
	return (
		<div className="nav-container">
			<p className="nav-logo">Covid-19 Tracker</p>
			<div className="nav-icon-container">
				<p
					className="active-link"
					onClick={() => props.switchScreen(true, false, false)}
					id="india"
				>
					Indian Report
				</p>
				<p onClick={() => props.switchScreen(false, true, false)} id="world">
					Worldwide Report
				</p>
				<p onClick={() => props.switchScreen(false, false, true)} id="vaccine">
					Vaccine Status
				</p>
			</div>
		</div>
	);
}

export default Navbar;
