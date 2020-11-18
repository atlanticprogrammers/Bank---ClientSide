import { Component, OnInit } from '@angular/core';
import { BankInterestService } from './shared/bank-interest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private bankInterestService: BankInterestService) {}

  ngOnInit(): void {
    this.bankInterestService.getBank('1').subscribe( (bank: any) => {
      console.log(bank);
      console.log('------------------');
      console.log(bank.name);
      console.log(bank.banckCode);
      console.log(bank.detailses[1].detailsId.loanType);
    });
  }
}
