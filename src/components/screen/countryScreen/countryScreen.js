import { useEffect, useState } from 'react';
import './style.css';

import Card from './../../card/card';
import Largecard from './../../largecard/largecard';
import ScrollList from './../../scrollList/scrollList';

function CountryScreen() {
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
	const [countryData, setCountryData] = useState([]);
	useEffect(() => {
		fetch('https://corona.lmao.ninja/v2/countries?yesterday')
			.then((res) => res.json())
			.then((data) => {
				let maxCount = 0;
				let maxCountry = '';
				let minCount = 100000;
				let minCountry = '';

				for (let item of data) {
					setTotal((total) => total + item.cases);
					setDeaths((deaths) => deaths + item.deaths);
					setRecovered((recovered) => recovered + item.recovered);
					setActive((active) => active + item.active);
					setDeltaActive((deltaActive) => deltaActive + item.todayCases);
					setDeltaDeaths((deltaDeaths) => deltaDeaths + item.todayDeaths);
					setDeltaRecovered(
						(deltaRecovered) => deltaRecovered + item.todayRecovered
					);
					if (item.active > maxCount) {
						maxCount = item.active;
						maxCountry = item.country;
					}
					if (item.active < minCount) {
						minCount = item.active;
						minCountry = item.country;
					}
					setCountryData((prevCountryData) => [
						...prevCountryData,
						{
							name: item.country,
							count: item.active.toLocaleString('en-IN'),
							add: item.todayCases.toLocaleString('en-IN'),
						},
					]);
				}

				setMostAffected(maxCountry);
				setMostAffectedCount(maxCount);
				setLeastAffected(minCountry);
				setLeastAffectedCount(minCount);
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
			<ScrollList data={countryData} />
		</div>
	);
}

export default CountryScreen;
