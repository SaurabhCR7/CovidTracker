import React from 'react';
import './css/navbar.css';

function Navbar(props) {
	const changeLang = (e) => {
		if (e.target.value === 'English') props.changeLanguage(false);
		else props.changeLanguage(true);
	};
	return (
		<div className="navbar-container">
			<div className="logo">
				<p className="main-logo">
					COVID<span>19</span>
				</p>
				<p className="sub-logo">TRACKER</p>
			</div>
			<div className="dropdown">
				<p className="dropdown-name">Language :&nbsp; </p>
				<select id="language" onChange={(e) => changeLang(e)}>
					<option value="English">English</option>
					<option value="Hindi">हिन्दी</option>
				</select>
			</div>
		</div>
	);
}

export default Navbar;
