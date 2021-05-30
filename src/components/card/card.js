import './style.css';

const Card = (props) => {
	return (
		<div className="card-container" style={{ backgroundColor: props.color }}>
			<i class={props.icon}></i>
			<p className="card-heading">{props.title}</p>
			<p className="card-number">{props.count}</p>
			{props.add === 0 ? null : <p className="card-add">+ {props.add}</p>}
		</div>
	);
};

export default Card;
