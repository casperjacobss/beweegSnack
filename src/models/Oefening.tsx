export interface Oefening {
	titel: string;
	uitleg: string;
	variant: string;
	duur: number;
	intensiteit: Intensiteit;
	image?: string;
	benodigdheden: string;
}

export enum Intensiteit {
	LAAG = "laag",
	MATIG = "Matig",
	HOOG = "Hoog",
}
