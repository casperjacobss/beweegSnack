import { Intensiteit, Oefening } from "../models/Oefening";

interface OefeningViewProps {
	oefening: Oefening;
	onback: () => void;
}

const OefeningView = (props: OefeningViewProps) => {
	return (
		<>
			<div className="title">
				{props.oefening.titel}

				<button onClick={props.onback}>Back</button>
			</div>
			<div className="infoField">
				<div className="textfield">
					<h5>
						Duur: <span className="fs-5">{props.oefening.duur} minuten</span>
					</h5>
					<h5>Intensiteit: {getIntensity(props.oefening.intensiteit)}</h5>
				</div>

				<div className="textfield">
					<h3>Uitleg</h3>
					<p>{props.oefening.uitleg}</p>
					{props.oefening.image ? (
						<img src={props.oefening.image} alt="voorbeeld"></img>
					) : (
						<></>
					)}
				</div>

				<div className="textfield">
					<h3>Variant</h3>
					<p>{props.oefening.variant}</p>
				</div>

				<div className="textfield">
					<h3>Benodigdheden</h3>
					<p>{props.oefening.benodigdheden}</p>
				</div>
			</div>
		</>
	);
};

function getIntensity(intensiteit: Intensiteit): JSX.Element {
	switch (intensiteit) {
		case Intensiteit.LAAG:
			return <span className="text-success fs-5 me-2">Laag</span>;
		case Intensiteit.MATIG:
			return <span className="text-warning fs-5 me-2">Matig</span>;
		case Intensiteit.HOOG:
			return <span className="text-danger fs-5 me-2">Hoog</span>;
	}
}

export default OefeningView;
