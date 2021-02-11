import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BankInterestService } from './shared/services/bank-interest.service';
import { SharedModule } from './shared/shared.module';
import { EntityModule } from './entity/entity.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadderComponent } from './headder/headder.component';

// import { NavbarSample1Component } from "./navbar-sample-1/navbar-sample-1.component";


import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CurrencyExchangeService } from './shared/services/currency-exchange.service';


@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    // DoubleNavbarModule,
    // SidenavModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    EntityModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    CommonModule

  ],
  providers: [BankInterestService, CurrencyExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
