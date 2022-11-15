import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RowElement } from 'src/app/row-element.Interfaces/rowElement';
import { DetailDialogComponent } from 'src/app/Dialogs/detail-dialog/detail-dialog.component';



const ELEMENT_DATA: RowElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<RowElement>();
  
  ClickedRow(row: RowElement) {
    console.log(row);
    this.clickedRows.add(row);
    this.dialog.open(DetailDialogComponent,{
      data: row
    });
    //this.router.navigate
  }
}

// @Component({
//   selector: 'dialog-data-example-dialog',
//   templateUrl: 'src\app\Dialogs\detail-dialog\detail-dialog.component.html',
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: RowElement) {}
// }
