import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-detailviewheader',
  templateUrl: './detailviewheader.component.html',
  styleUrls: ['./detailviewheader.component.css']
})
export class DetailviewheaderComponent implements OnChanges {
  @Input() stockDetail: any;
  public symbol:string;
  public company:string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.symbol = changes.stockDetail.currentValue;
  }

  // ngOnInit(): void {
  //   // debugger;
  // }

}
