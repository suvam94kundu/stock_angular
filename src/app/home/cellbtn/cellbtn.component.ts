import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { ListingComponent } from "../listing/listing.component";

@Component({
  selector: 'app-cellbtn',
  templateUrl: './cellbtn.component.html',
  styleUrls: ['./cellbtn.component.css']
})
export class CellbtnComponent implements OnInit, ICellRendererAngularComp {
  public cellValue:any;
  public para;
  constructor() { }
  refresh(params: any): boolean {
    this.cellValue = params.value;
    return true;
  }
  // afterGuiAttached?(params?: any): void {
  //   throw new Error('Method not implemented.');
  // }
  delete(sd)
  {
    this.para.api.dispatchEvent('delete',sd)
  }
  agInit(params:any){
    debugger;
      this.para = params;
      this.cellValue = params.data;
  }
  ngOnInit(): void {
  }

}
