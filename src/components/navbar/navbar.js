import './style.css';

function Navbar() {
	const screenSwitch = (show1, show2, show3) => {
		const india = document.querySelector('#india');
		const world = document.querySelector('#world');
		const vaccine = document.querySelector('#vaccine');
		if (show1) {
			india.classList.add('active-link');
			world.classList.remove('active-link');
			vaccine.classList.remove('active-link');
		} else if (show2) {
			india.classList.remove('active-link');
			world.classList.add('active-link');
			vaccine.classList.remove('active-link');
		} else {
			india.classList.remove('active-link');
			world.classList.remove('active-link');
			vaccine.classList.add('active-link');
		}
	};

	return (
		<div className="nav-container">
			<p className="nav-logo">Covid-19 Tracker</p>
			<div className="nav-icon-container">
				<p
					className="active-link"
					onClick={() => screenSwitch(true, false, false)}
					id="india"
				>
					Indian Report
				</p>
				<p onClick={() => screenSwitch(false, true, false)} id="world">
					Worldwide Report
				</p>
				<p onClick={() => screenSwitch(false, false, true)} id="vaccine">
					Vaccine Status
				</p>
			</div>
		</div>
	);
}

export default Navbar;
