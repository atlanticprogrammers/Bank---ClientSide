import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { BankInterestService } from 'src/app/shared/services/bank-interest.service';
import { BankLoanService } from './bank-loan.service';


@Component({
  selector: 'app-bank-loan',
  templateUrl: './bank-loan.component.html',
  styleUrls: ['./bank-loan.component.scss']
})
export class BankLoanComponent implements OnInit {
  displayColumns: TableColumn[];
  toggleDropdown = "Select Loan Type";
  loanTypes: string[] = ['Personal Loans', 'Senior Citizen Loan','Housing Loans']
  public allBankList: {bankName : string, interest: number, monthlyInstallment: number } [] = [];

  constructor(private bankLoanService: BankLoanService, private bankInterestService: BankInterestService) { }
  
  ngOnInit(): void {
    this.setColumns();
    // const y = {
    //   bankName: 'HNB',
    //   interest: 7,
    //   monthlyInstallment: 25000
    // }
    // const yy = {
    //   bankName: 'PanAsia',
    //   interest: 8,
    //   monthlyInstallment: 12000
    // }
    // this.allBankList.push(y);
    // this.allBankList.push(yy);
  }

  setColumns() {
    this.displayColumns = [
      // { prop: '', name: 'Bank Logo', width: 400 },
      { prop: 'bankName', name: 'Bank Name', width: 400 },
      { prop: 'interest', name: 'Interest', width: 400 },
      { prop: 'monthlyInstallment', name: 'Monthly Installment', width: 400 }
    ];
  }

  test(index: any) {
    this.toggleDropdown = this.loanTypes[index];
    const d = 'sasindu';
  }

  loadAll() {
     this.bankLoanService.loadAllBanks();
    // const y = {
    //   bankName: 'HNB',
    //   interest: 7,
    //   monthlyInstallment: 25000
    // }
    // const yy = {
    //   bankName: 'PanAsia',
    //   interest: 8,
    //   monthlyInstallment: 12000
    // }
    // this.allBankList.push(y);
    // this.allBankList.push(yy);
    // console.log(this.allBankList);
  }

}
