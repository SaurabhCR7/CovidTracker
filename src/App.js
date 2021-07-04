import { useState } from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';
import StateScreen from './components/screen/stateScreen/stateScreen';
import CountryScreen from './components/screen/countryScreen/countryScreen';

function App() {
	const [screen1, setScreen1] = useState(true);
	const [screen2, setScreen2] = useState(false);
	const [screen3, setScreen3] = useState(false);
	const switchScreen = (show1, show2, show3) => {
		const india = document.querySelector('#india');
		const world = document.querySelector('#world');
		const vaccine = document.querySelector('#vaccine');
		if (show1) {
			india.classList.add('active-link');
			world.classList.remove('active-link');
			vaccine.classList.remove('active-link');
			setScreen1(true);
			setScreen2(false);
			setScreen3(false);
		} else if (show2) {
			india.classList.remove('active-link');
			world.classList.add('active-link');
			vaccine.classList.remove('active-link');
			setScreen1(false);
			setScreen2(true);
			setScreen3(false);
		} else if (show3) {
			india.classList.remove('active-link');
			world.classList.remove('active-link');
			vaccine.classList.add('active-link');
			setScreen1(false);
			setScreen2(false);
			setScreen3(true);
		}
	};
	return (
		<div className="App">
			<Navbar switchScreen={switchScreen} />
			{screen1 ? <StateScreen /> : null}
			{screen2 ? <CountryScreen /> : null}
		</div>
	);
}

export default App;
