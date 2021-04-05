import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ListingComponent} from './listing/listing.component';
import { DetailViewComponent } from "./detail-view/detail-view.component";
const routes: Routes = [
    {path: 'home', children:[
        { path: '', 
          component: HomepageComponent,
          children: [
            {path:'detail/:symbol', component:DetailViewComponent},
            {path:'', component:ListingComponent}
            
          ]
        }
      ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homeRoutingModule { }
