export interface ICurrencyList {
    currencyName: string;
}
export class CurrencyList implements ICurrencyList  {
    constructor( public currencyName: string) {}
} 