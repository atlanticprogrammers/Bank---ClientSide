import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BankInterestService } from './shared/services/bank-interest.service';
import { SharedModule } from './shared/shared.module';
import { EntityModule } from './entity/entity.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    EntityModule,
    BrowserAnimationsModule,
  ],
  providers: [BankInterestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
