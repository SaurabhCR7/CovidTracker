import './style.css';

const Largecard = (props) => {
	return (
		<div className="lgcard-container">
			<div>
				<p className="lgcard-title">{props.title}</p>
				<p className="lgcard-location">{props.location}</p>
			</div>
			<div className="lgcard-subcontainer">
				<div className="lgcard-count-container">
					<i class="fas fa-angle-double-right"></i>
					<p className="lgcard-count">{props.count} Cases</p>
				</div>
				<div className="lgcard-loc-icon">
					<i class="fas fa-map-marker-alt"></i>
				</div>
			</div>
		</div>
	);
};

export default Largecard;
