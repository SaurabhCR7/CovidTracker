import { useState } from 'react';
import './style.css';

import Item from './../item/item';

const ScrollList = (props) => {
	const [input, setInput] = useState('');
	return (
		<div className="list-container">
			<p className="list-title">State Report</p>
			<div className="search-box">
				<input
					type="text"
					placeholder="Search"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<i class="fas fa-search"></i>
			</div>
			<div className="scroll-container">
				{props.data.map((item) =>
					input === '' ||
					item.name.toLowerCase().includes(input.toLowerCase()) ? (
						<Item
							key={item.name}
							name={item.name}
							count={item.count}
							add={item.add}
						/>
					) : null
				)}
			</div>
		</div>
	);
};

export default ScrollList;
