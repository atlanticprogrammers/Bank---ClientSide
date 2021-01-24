import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBank } from '../model/bank';
import { IDetails } from '../model/details';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable()
export class BankInterestService {

  constructor(private http: HttpClient) { }

  getBank(bankCode: string) {
    return this.http.get('server/api/loans/interest/' + bankCode);
  }

  getAllBanks() {
    return this.http.get('server/api/loans/interest/');
  }

  saveBankWithDetails(bank: IBank) {
    const body = JSON.stringify(bank);
    return this.http.post('server/api/loans/interest', body, httpOptions);
  }

  updateBankDetails(bankCode: string, Details :IDetails[]) {
    const body = JSON.stringify(Details);
    return this.http.put('server/api/loans/interest/bankDetails/' + bankCode, body, httpOptions);
  }

}
