import {Component, OnInit } from '@angular/core'; 
import { NgIf, NgFor } from '@angular/common';
import { DashboardCourseComponent } from './dashboard-course/dashboard-course.component';
import { DashboardInformationComponent } from './dashboard-information/dashboard-information.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';

@Component({
    selector: 'app-dashboard-overview',
    templateUrl: './dashboard-overview.component.html',
    styleUrls: ['./dashboard-overview.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, DashboardCourseComponent, DashboardInformationComponent, DashboardFooterComponent]
})
export class DashboardOverviewComponent implements OnInit {

  constructor() {
  
  }

  ngOnInit(): void { 
   
  }

}
