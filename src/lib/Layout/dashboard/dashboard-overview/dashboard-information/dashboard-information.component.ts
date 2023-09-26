import {Component, Input, OnInit } from '@angular/core'; 
import { NgIf, NgFor, NgClass } from '@angular/common';
import { NavigationService } from 'src/lib/Layout/navigation/navigation.service';

@Component({
    selector: 'app-dashboard-information',
    templateUrl: './dashboard-information.component.html',
    styleUrls: ['./dashboard-information.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NgClass]
})
export class DashboardInformationComponent implements OnInit {
  @Input('darkmode') darkmode: boolean;

  constructor(public nS: NavigationService) {
  
  }

  ngOnInit(): void { 
   
  }

}
