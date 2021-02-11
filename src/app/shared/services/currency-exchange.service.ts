import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurrencyExchange } from '../model/currency-exchange'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable()
export class CurrencyExchangeService {
    constructor(private http: HttpClient) { }

    getAllCurrencyNames() {
        return this.http.get('server/api/currency/exchange/currencyList/');
    }

    getAllCurrencyExchangeRatesByCurrencyType(currencyType: string) {
        return this.http.get('server/api/currency/exchange/'+currencyType);
    }

    getCurrencyExchangeRatesByCurrencyTypeAndBankName(bankName: string, currencyType: string) {
        return this.http.get('server/api/currency/exchange/'+bankName+'/'+currencyType);
    }

    insertNewCurrencyExchangeRate(currencyExchange: ICurrencyExchange) {
        const body = JSON.stringify(currencyExchange);
        return this.http.post('server/api/currency/exchange', body, httpOptions);
    }

    updateCurrencyExchange(currencyExchange: ICurrencyExchange) {
        const body = JSON.stringify(currencyExchange);
        return this.http.put('server/api/currency/exchange/update', body, httpOptions);
    }
}