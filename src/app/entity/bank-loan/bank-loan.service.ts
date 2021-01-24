import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBank } from 'src/app/shared/model/bank';
import { BankInterestService } from 'src/app/shared/services/bank-interest.service';

@Injectable({
    providedIn: 'root'
})
export class BankLoanService { 
    public allBankList: {bankName : string, interest: number, monthlyInstallment: number } [] = [];
    bankList: IBank[];
    public loadBankList = new Subject();

    constructor(private bankInterestService: BankInterestService) {}

    loadAllBanks()  {
        this.bankInterestService.getAllBanks().subscribe( (allBankList: IBank[]) => {
            this.setBankList(allBankList);
        });
    }

    setBankList(bankList: IBank[]) {
        console.log(bankList);
        // bankList.forEach( (singalBank: IBank) => {
        //     {
        //         bankName : singalBank.name,
        //         interest: singalBank.detailses.interestRate
        //     }
        // });
        // this.bankList = bankList;
        // console.log(this.bankList);
        const y = {
            bankName: 'HNB',
            interest: 7,
            monthlyInstallment: 25000
          }
          const yy = {
            bankName: 'PanAsia',
            interest: 8,
            monthlyInstallment: 12000
          }
          this.allBankList.push(y);
          this.allBankList.push(yy);
          this.loadBankList.next(this.allBankList);
    }

    
    
}