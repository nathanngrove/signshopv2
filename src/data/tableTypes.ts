export type Item = {
	id: number;
	upc: string;
	title: string;
	brand: string;
	productAmount: number;
	singlesSize: string;
	promoId: number[] | null;
	parityId: number | null;
	price: string;
};

export type ParityGroup = {
	id: number;
	title: string;
	brand: string;
	promoId: number[] | null;
};

export type Promotion = {
	id: number;
	title: string;
	salePrice: string | null;
	mustBuy: number;
	multiplesOf: number | null;
	getOneFree: boolean;
	maxOffers: number | null;
	startDate: Date;
	endDate: Date;
	percentageOff: number | null;
	digitalDeal: boolean;
};

export type ParityOnSale = {
	parityId: number;
	promoId: number;
};

export type ItemOnSale = {
	itemId: number;
	promoId: number;
};

export type ItemsOnPromotion = ParityOnSale | ItemOnSale;
