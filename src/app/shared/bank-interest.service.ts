import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable()
export class BankInterestService {

  constructor(private http: HttpClient) { }

  getBank(bankCode: string) {
    return this.http.get('server/api/loans/interest/' + bankCode);
  }
}
