export interface ICurrencyExchange {
    id?: number;
    bankName: string;
    currencyType: string;
    sellingRate: number;
    buyingRate: number;
    lastUpdateDate?: Date
}
export class CurrencyExchange implements ICurrencyExchange  {
    constructor(
        public bankName: string, 
        public currencyType: string,
        public sellingRate: number,
        public buyingRate: number,
        public id?: number, 
        public lastUpdateDate?: Date
        ) {}
} 