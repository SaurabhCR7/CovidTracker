import React from 'react';
import CountUp from 'react-countup';
import './css/subStats.css';

function SubStats(props) {
	return (
		<div
			className="subStats"
			style={{
				backgroundColor: props.color,
				borderColor: `${props.border}`,
			}}
		>
			<h3
				className="subStats-title"
				style={{ color: props.border, width: '100%' }}
			>
				{props.title}
			</h3>
			<h1 className="subStats-count" style={{ color: props.border }}>
				<CountUp end={props.count} duration={1} />
			</h1>
		</div>
	);
}

export default SubStats;
