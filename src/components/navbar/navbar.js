import './style.css';

function Navbar() {
	return (
		<div className="nav-container">
			<p className="nav-logo">Covid-19 Tracker</p>
			<div className="nav-icon-container">
				<i class="fas fa-home"></i>
				<i class="fas fa-globe-americas"></i>
				<i class="fas fa-syringe"></i>
				<i class="fas fa-phone-alt"></i>
			</div>
		</div>
	);
}

export default Navbar;
