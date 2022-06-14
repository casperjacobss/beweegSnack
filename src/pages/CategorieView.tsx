import { useState } from "react";
import { Oefening } from "../models/Oefening";
import OefeningView from "./OefeningView";

interface CategorieViewProps {
	oefeningenLijst: Oefening[];
	onback: () => void;
}

const CategorieView = (props: CategorieViewProps) => {
	const [currrentOefening, changeCurrentOefening] = useState<JSX.Element | undefined>();

	const onBack = () => {
		changeCurrentOefening(undefined);
	};

	const clickOefening = (oefening: Oefening) => {
		changeCurrentOefening(<OefeningView oefening={oefening} onback={onBack} />);
	};

	return (
		<div>
			{currrentOefening === undefined ? (
				<>
					<div className="backContainer">
						<button onClick={props.onback}>Back</button>
					</div>
					<ul className="homeList">
						{props.oefeningenLijst.map((item) => (
							<li onClick={() => clickOefening(item)}>{item.titel}</li>
						))}
					</ul>
				</>
			) : (
				currrentOefening
			)}
		</div>
	);
};

export default CategorieView;
