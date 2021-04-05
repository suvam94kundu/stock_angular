import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Params } from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetailviewheaderComponent } from "../detailviewheader/detailviewheader.component";
import { Location } from '@angular/common'
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  public chartData: any[];
  public xAxis: Object;
  public YAxis: Object;
  public toolTipSettings: Object;
  public crossSettings: Object;
  public dataID;
  public stockDetail;
  state$;
  title;
  @ViewChild('ColorSampleComponent', {
    static: true
  }) mytxt: ElementRef;
  constructor(public activatedRoute: ActivatedRoute,private location: Location,private commonService:CommonService) {
    this.toolTipSettings = {
      enable: true
    }
    this.crossSettings = {
      enable: true,
      lineType: 'vertical'
    }
    this.xAxis = {
      title: 'Date',
      valueType: 'DateTime',
      labelFormat: 'ddMMM',
      crosshairTooltip: {
        enable: true
      }
    }
    this.title = 'OHLC analysis';
    this.YAxis = {
      title: 'Price in Dollar'
    }
    this.chartData = [
      {
        date: new Date('2012-04-02'),
        open: 320.70,
        high: 324.07,
        low: 317.73,
        close: 323.73,
        volume: 45676324
      }, {
        date: new Date('2012-04-03'),
        open: 323.028015,
        high: 324.299286,
        low: 319.639648,
        close: 321.631622,
        volume: 23432423
      }, {
        date: new Date('2012-04-04'),
        open: 319.544556,
        high: 319.819824,
        low: 315.865875,
        close: 317.892883,
        volume: 3435235432
      }, {
        date: new Date('2012-04-05'),
        open: 316.436432,
        high: 320.533539,
        low: 311.599609,
        close: 312.476471,
        volume: 2324345456
      }, {
        date: new Date('2012-04-06'),
        open: 320.436432,
        high: 321.533539,
        low: 318.599609,
        close: 321.476471,
        volume: 2324345456
      }, {
        date: new Date('2012-04-07'),
        open: 319.234324,
        high: 320.24324,
        low: 314.21321,
        close: 320.32432,
        volume: 2324345456
      }, {
        date: new Date('2012-04-08'),
        open: 311.436432,
        high: 314.533539,
        low: 310.599609,
        close: 313.7868,
        volume: 2324345456
      }, {
        date: new Date('2012-04-09'),
        open: 320.76123,
        high: 321.09887,
        low: 318.312334,
        close: 318.476471,
        volume: 2324345456
      }, {
        date: new Date('2012-04-10'),
        open: 318.0934,
        high: 326.21345,
        low: 313.234,
        close: 325.1231,
        volume: 2324345456
      }, {
        date: new Date('2012-04-11'),
        open: 330.436432,
        high: 334.533539,
        low: 319.599609,
        close: 334.476471,
        volume: 2324345456
      },
      {
        date: new Date('2012-04-12'),
        open: 319.436432,
        high: 320.533539,
        low: 318.599609,
        close: 320.476471,
        volume: 2324345456
      }
    ]
  }
  routeBack(){
    this.location.back();
  }
  ngOnInit(): void {
    
    this.dataID = this.activatedRoute.snapshot.params['symbol'];
    debugger;
    this.commonService.viewDetails(this.dataID).subscribe(resp => {
      this.stockDetail = resp;
    });

  }

}

