import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableComponent } from '../shared/data-table/data-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    declarations: [
      DataTableComponent,
    ],
    imports: [
      BrowserModule,
      NgxDatatableModule
    ],
    exports: [
      DataTableComponent,
      NgxDatatableModule
    ],
    providers: []
  })
  export class SharedModule {

  }


  