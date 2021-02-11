import { Component, OnInit } from '@angular/core';
import { BankInterestService } from './shared/services/bank-interest.service';
import { CurrencyExchangeService } from './shared/services/currency-exchange.service';
import { IBank, Bank } from './shared/model/bank';
import { IDetails, Details } from './shared/model/details';
import { ICurrencyList} from './shared/model/currency-list';
// import { ICurrencyList} from './shared/model/currency-list';

import { IDetailsId, DetailsId } from './shared/model/details-id';
import { error } from '@angular/compiler/src/util';
import { CurrencyExchange, ICurrencyExchange } from './shared/model/currency-exchange';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  iDetailsId: IDetailsId;
  DetailsId1: IDetailsId;
  DetailsId2: IDetailsId;

  iDetails: IDetails
  iDetails2: IDetails
  iDetails3: IDetails

  detailsList: IDetails[]= [];

  iBank: IBank;

  iCurrencyExchange: ICurrencyExchange;
  currencyExch: CurrencyExchange;
  hmmmm: any;


  constructor(private bankInterestService: BankInterestService, private currencyExchange: CurrencyExchangeService) {}

  ngOnInit(): void {

    /** Updae Bank Details
    this.iDetailsId = new DetailsId('1','Personal Loans',60);
    this.DetailsId1 = new DetailsId('1','Senaior Citizeen Loans',12);

    this.iDetails  = new  Details(this.iDetailsId, 5.6);
    this.iDetails2 = new Details(this.DetailsId1, 4.0);

    this.detailsList.push(this.iDetails);
    this.detailsList.push(this.iDetails2);

    this.bankInterestService.updateBankDetails('1',this.detailsList).subscribe( () => {
      console.log('Updated');
    }, error => {
      console.log(error);
    });
    */
    /**  Insert a Full record
    this.iDetailsId = new DetailsId('6','Personal Loans',60);
    this.DetailsId1 = new DetailsId('6','Senaior Citizeen Loans',12);
    this.DetailsId2 = new DetailsId('6','Housing Loans',120);

    this.iDetails  = new  Details(this.iDetailsId, 5.6);
    this.iDetails2 = new Details(this.DetailsId1, 4.0);
    this.iDetails3 = new Details(this.DetailsId2, 3.0);

    this.detailsList.push(this.iDetails);
    this.detailsList.push(this.iDetails2);
    this.detailsList.push(this.iDetails3);

    this.iBank = new Bank('6','PanAsia Bank',this.detailsList);

    this.bankInterestService.saveBankWithDetails(this.iBank).subscribe( ()=> {
      console.log('Compleeted');
    },
    error => {
      console.log(error);
    });
    */

    /** 
      this.bankInterestService.getBank('1').subscribe( (bank: any) => {
        console.log(bank);
        console.log('------------------');
        console.log(bank.name);
        console.log(bank.banckCode);
        console.log(bank.detailses[1].detailsId.loanType);
      });
    */

    /** Load All the
        this.bankInterestService.getAllBanks().subscribe( i => {
        console.log(i);
      });
     */
    // this.bankInterestService.getAllBanks().subscribe( i => {
    //   console.log(i);
    // });
    
    // this.currencyExchange.getAllCurrencyNames().subscribe( (i: ICurrencyList[]) => {
    //   i.forEach( a => {
    //     console.log(a.currencyName);
    //   })
    // });

    // this.currencyExchange.getAllCurrencyExchangeRatesByCurrencyType('Australian Doller').subscribe( i => {
    //     console.log(i);
    // });

    // this.iCurrencyExchange = new CurrencyExchange('Valibal Finance','Euro',100,125);
    // this.currencyExchange.insertNewCurrencyExchangeRate(this.iCurrencyExchange).subscribe( i => {
    //   console.log(i);
    // })

    //  this.currencyExchange.getCurrencyExchangeRatesByCurrencyTypeAndBankName('Sampath Banka','Australian Doller').subscribe( (i: ICurrencyExchange) => {
    //   console.log('Bfore Updating ...............');
    //   console.log(i);
    //   console.log('After Updating ...............');
    //   i.sellingRate = 201;
    //   this.currencyExchange.updateCurrencyExchange(i).subscribe( a => console.log(a));
    // });
  }
}
