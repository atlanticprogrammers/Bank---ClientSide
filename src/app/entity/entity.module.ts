import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BankLoanComponent } from './bank-loan/bank-loan.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [
       BankLoanComponent
    ],
    imports: [
      BrowserModule,
      SharedModule,
      FormsModule,
      TextFieldModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      BrowserAnimationsModule,
      NgbModule
    ],
    exports: [
        BankLoanComponent
    ],
    providers: []
  })
  export class EntityModule {

  }

// https://www.telerik.com/kendo-angular-ui/components/dropdowns/combobox/
  