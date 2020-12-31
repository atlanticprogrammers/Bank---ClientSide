import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-bank-loan',
  templateUrl: './bank-loan.component.html',
  styleUrls: ['./bank-loan.component.scss']
})
export class BankLoanComponent implements OnInit {
  displayColumns: TableColumn[];
  toggleDropdown = "Select Loan Type";
  loanTypes: string[] = ['Personal Loans', 'Senior Citizen Loan','Housing Loans']

  constructor() { }
  
  ngOnInit(): void {
    this.setColumns();
  }

  setColumns() {
    this.displayColumns = [
      { prop: 'id', name: 'Bank Name', width: 300 },
      { prop: 'functionCode', name: 'Interest', width: 300 },
      { prop: 'functionName', name: 'Monthly Installment', width: 300 }
    ];
  }

  test(index: any) {
    this.toggleDropdown = this.loanTypes[index];
    const d = 'sasindu';
  }

}
