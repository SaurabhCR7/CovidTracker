import { useEffect, useState } from 'react';
import './style.css';

import Card from './../../card/card';
import Largecard from './../../largecard/largecard';
import ScrollList from './../../scrollList/scrollList';

function StateScreen() {
	const [total, setTotal] = useState(0);
	const [deaths, setDeaths] = useState(0);
	const [active, setActive] = useState(0);
	const [recovered, setRecovered] = useState(0);
	const [deltaDeaths, setDeltaDeaths] = useState(0);
	const [deltaActive, setDeltaActive] = useState(0);
	const [deltaRecovered, setDeltaRecovered] = useState(0);
	const [mostAffected, setMostAffected] = useState('');
	const [mostAffectedCount, setMostAffectedCount] = useState(0);
	const [leastAffected, setLeastAffected] = useState('');
	const [leastAffectedCount, setLeastAffectedCount] = useState(0);
	const [stateData, setStateData] = useState([]);
	useEffect(() => {
		fetch('https://api.covid19india.org/data.json')
			.then((res) => res.json())
			.then((data) => {
				const stats = data.statewise[0];
				setTotal(parseInt(stats.confirmed));
				setDeaths(parseInt(stats.deaths));
				setActive(parseInt(stats.active));
				setRecovered(parseInt(stats.recovered));
				setDeltaDeaths(parseInt(stats.deltadeaths));
				setDeltaActive(parseInt(stats.deltaconfirmed));
				setDeltaRecovered(parseInt(stats.deltarecovered));

				let maxCount = 0;
				let maxState = '';
				let minCount = 0;
				let minState = '';

				for (let item of data.statewise) {
					let count = parseInt(item.confirmed);
					if (minCount === 0) {
						minCount = count;
					}
					if (item.state !== 'Total' && item.state !== 'State Unassigned') {
						if (count > maxCount) {
							maxCount = count;
							maxState = item.state;
						}
						if (count < minCount) {
							minCount = count;
							minState = item.state;
						}
						setStateData((prevStateData) => [
							...prevStateData,
							{
								name: item.state,
								count: parseInt(item.active).toLocaleString('en-IN'),
								add: parseInt(item.deltaconfirmed).toLocaleString('en-IN'),
							},
						]);
					}
				}
				setMostAffectedCount(maxCount);
				setMostAffected(maxState);
				setLeastAffectedCount(minCount);
				setLeastAffected(minState);
			});
	}, []);
	return (
		<div className="state-screen-container">
			<div className="cards-container">
				<div className="stats-container">
					<div className="stats-subcontainer">
						<Card
							color="#00B3FF"
							title="Total Cases"
							icon="fas fa-globe"
							count={total.toLocaleString('en-IN')}
							add={0}
						/>
						<Card
							color="#D85C65"
							title="Deaths"
							icon="fas fa-user-times"
							count={deaths.toLocaleString('en-IN')}
							add={deltaDeaths.toLocaleString('en-IN')}
						/>
					</div>
					<div className="stats-subcontainer">
						<Card
							color="#FF7AAE"
							title="Active Cases"
							icon="fas fa-bullseye"
							count={active.toLocaleString('en-IN')}
							add={deltaActive.toLocaleString('en-IN')}
						/>
						<Card
							color="#52B788"
							title="Recovered"
							icon="fas fa-plus-circle"
							count={recovered.toLocaleString('en-IN')}
							add={deltaRecovered.toLocaleString('en-IN')}
						/>
					</div>
				</div>
				<div className="most-min-container">
					<Largecard
						title="Most Affected State"
						location={mostAffected}
						count={mostAffectedCount.toLocaleString('en-IN')}
					/>
					<Largecard
						title="Least Affected State"
						location={leastAffected}
						count={leastAffectedCount.toLocaleString('en-IN')}
					/>
				</div>
			</div>
			<ScrollList data={stateData} />
		</div>
	);
}

export default StateScreen;
