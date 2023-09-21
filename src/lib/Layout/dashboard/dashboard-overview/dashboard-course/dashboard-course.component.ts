import {Component, OnInit } from '@angular/core'; 
import { NgIf, NgFor } from '@angular/common';
import { NavigationService } from 'src/lib/Layout/navigation/navigation.service';

@Component({
    selector: 'app-dashboard-course',
    templateUrl: './dashboard-course.component.html',
    styleUrls: ['./dashboard-course.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor]
})
export class DashboardCourseComponent implements OnInit {

  constructor(public nS: NavigationService) {
  
  }

  ngOnInit(): void { 
   
  }

}
