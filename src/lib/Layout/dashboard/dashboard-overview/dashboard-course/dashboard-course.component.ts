import {Component, Input, OnInit } from '@angular/core'; 
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';
import { NavigationService } from 'src/lib/Layout/navigation/navigation.service';

@Component({
    selector: 'app-dashboard-course',
    templateUrl: './dashboard-course.component.html',
    styleUrls: ['./dashboard-course.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NgClass, NgStyle]
})
export class DashboardCourseComponent implements OnInit {
 @Input('darkmode') darkmode: boolean;
  constructor(public nS: NavigationService) {
  
  }

  ngOnInit(): void { 
   
  }

}
