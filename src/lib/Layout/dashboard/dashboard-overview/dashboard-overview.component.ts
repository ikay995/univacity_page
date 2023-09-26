import {Component, Input, OnInit } from '@angular/core'; 
import { NgIf, NgFor, NgClass } from '@angular/common';
import { DashboardCourseComponent } from './dashboard-course/dashboard-course.component';
import { DashboardInformationComponent } from './dashboard-information/dashboard-information.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';

@Component({
    selector: 'app-dashboard-overview',
    templateUrl: './dashboard-overview.component.html',
    styleUrls: ['./dashboard-overview.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NgClass, DashboardCourseComponent, DashboardInformationComponent, DashboardFooterComponent]
})
export class DashboardOverviewComponent implements OnInit {
  @Input('darkmode') darkmode: boolean;

  constructor() {
  
  }

  ngOnInit(): void { 
   
  }

}
