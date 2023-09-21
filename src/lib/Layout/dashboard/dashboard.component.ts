import {Component, OnInit, ViewChild } from '@angular/core'; 
import { NgIf, NgFor } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NavigationComponent, DashboardOverviewComponent,]
})
export class DashboardComponent implements OnInit {
  @ViewChild('modal') modal: any;

  constructor() {
   
  }

  ngOnInit(): void { 
   console.log(this.modal)
  }

}
