import { useState } from "react";
import * as AlleOefeningen from "../common/AlleOefeningen";
import { Oefening } from "../models/Oefening";
import CategorieView from "./CategorieView";

export const Categories: string[] = [
	"Coördinatie",
	"Evenwicht",
	"Concentratie",
	"Groot motorisch bewegen",
	"Kracht",
	"Ontspanning",
	"Reactiesnelheid",
	"Ritme",
	"Ruimte",
	"Samenwerken",
	"Snelheid",
	"Springen",
	"Uithouding",
];

const HomePage = () => {
	const [currentPage, changeCurrentPage] = useState<JSX.Element | undefined>();
	console.log(Categories);
	

	const clickItem = (item: string) => {
		let list: Oefening[] = [];
		switch (item) {
			case "Coördinatie":
				list = [
					AlleOefeningen.VriezenEnDooien(),
					AlleOefeningen.Beweegslang(),
					AlleOefeningen.Balanceren(),
					AlleOefeningen.NummerZoeken(),
					AlleOefeningen.Multidobbel(),
				];
				break;
			case "Evenwicht":
				list = [AlleOefeningen.LevendeTafel(), AlleOefeningen.Multidobbel()];
				break;
			case "Groot motorisch bewegen":
				list = [AlleOefeningen.MonkeySeeMonkeyDo(), AlleOefeningen.PatachiPataboem()];
				break;
			case "Concentratie":
				list = [
					AlleOefeningen.TegendraadseLeerling(),
					AlleOefeningen.Dirigentje(),
					AlleOefeningen.PatachiPataboem(),
					AlleOefeningen.DoeMaarNa(),
				];
				break;
			case "Kracht":
				list = [
					AlleOefeningen.Tabata(),
					AlleOefeningen.WieGeraaktRecht(),
					AlleOefeningen.Multidobbel(),
					AlleOefeningen.DoeMaarNa(),
				];
				break;
			case "Ontspanning":
				list = [
					AlleOefeningen.VriezenEnDooien(),
					AlleOefeningen.OntwarDeKnoop(),
					AlleOefeningen.DeLegeStoel(),
					AlleOefeningen.MetWieKomIkOvereen(),
					AlleOefeningen.MonkeySeeMonkeyDo(),
					AlleOefeningen.WieBenIk(),
					AlleOefeningen.WieNietWegIsIsGezien(),
				];
				break;
			case "Reactiesnelheid":
				list = [
					AlleOefeningen.DeLegeStoel(),
					AlleOefeningen.TegendraadseLeerling(),
					AlleOefeningen.Dirigentje(),
					AlleOefeningen.ActieReactie(),
					AlleOefeningen.Oogcontact(),
					AlleOefeningen.MeesterZegt(),
				];
				break;
			case "Ritme":
				list = [AlleOefeningen.Bodydrum(), AlleOefeningen.Oogcontact()];
				break;
			case "Ruimte":
				list = [AlleOefeningen.WieNietWegIsIsGezien(), AlleOefeningen.ZoekHetVoorwerp()];
				break;
			case "Samenwerken":
				list = [
					AlleOefeningen.LevendeTafel(),
					AlleOefeningen.OntwarDeKnoop(),
					AlleOefeningen.WieGeraaktRecht(),
					AlleOefeningen.MetWieKomIkOvereen(),
					AlleOefeningen.WieBenIk(),
					AlleOefeningen.ZoekHetVoorwerp(),
				];
				break;
			case "Snelheid":
				list = [
					AlleOefeningen.Beweegslang(),
					AlleOefeningen.Dirigentje(),
					AlleOefeningen.NummerZoeken(),
					AlleOefeningen.PatachiPataboem(),
					AlleOefeningen.WieNietWegIsIsGezien(),
				];
				break;
			case "Springen":
				list = [
					AlleOefeningen.Tabata(),
					AlleOefeningen.Aardbeving(),
					AlleOefeningen.Multidobbel(),
				];
				break;
			case "Uithouding":
				list = [AlleOefeningen.Multidobbel(), AlleOefeningen.MeesterZegt()];
				break;
			default:
				changeCurrentPage(undefined);
		}

		changeCurrentPage(<CategorieView oefeningenLijst={list} onback={onBack} />);
	};

	const onBack = () => {
		changeCurrentPage(undefined);
	};

	return (
		<div className="body">
			{currentPage === undefined ? (
				<ul className="homeList">
					{Categories.map((item) => (
						<li onClick={() => clickItem(item)}>{item}</li>
					))}
				</ul>
			) : (
				currentPage
			)}
		</div>
	);
};

export default HomePage;
