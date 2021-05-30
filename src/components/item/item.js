import './style.css';

const Item = (props) => {
	return (
		<div className="item">
			<p className="item-name">{props.name}</p>
			<div className="item-count-container">
				<p className="item-count">{props.count}</p>
				<p className="item-add">+{props.add}</p>
			</div>
		</div>
	);
};

export default Item;
