import { Component, Input, OnInit } from '@angular/core';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  /**
   * Define the columns of the table.
   */
  @Input()
  columns: TableColumn[];
  /**
    * Rows that are displayed in the table.
  */
  @Input()
  dataSet: any
  /**
    * Show the linear loading bar.
    * Default value: `false`
  */
  @Input()
  loadingIndicator: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
