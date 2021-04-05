import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { homeRoutingModule } from './home-routing.module';
import {HeaderComponent} from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AgGridModule } from "ag-grid-angular";
import {  ListingComponent } from "./listing/listing.component";
import { DetailViewComponent } from './detail-view/detail-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule, DateTimeService,CrosshairService,HiloOpenCloseSeriesService,TooltipService } from '@syncfusion/ej2-angular-charts';
import { CellbtnComponent } from './cellbtn/cellbtn.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DetailviewheaderComponent } from './detailviewheader/detailviewheader.component';
// import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
// import { IgxGridModule } from "igniteui-angular";
@NgModule({
  declarations: [
    HeaderComponent, 
    HomepageComponent,
    ListingComponent, 
    DetailViewComponent, 
    CellbtnComponent, 
    DetailviewheaderComponent
  ],
  imports: [
    CommonModule,
    homeRoutingModule,
    // IgxGridModule
    AgGridModule.withComponents([CellbtnComponent]),
    HttpClientModule,
    ChartModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers:[ HiloOpenCloseSeriesService,DateTimeService,TooltipService ],
  bootstrap: [HomepageComponent]
})
export class HomeModule { }
