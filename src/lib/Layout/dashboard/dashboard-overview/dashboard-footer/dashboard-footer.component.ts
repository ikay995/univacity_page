import {Component, Input, OnInit } from '@angular/core'; 
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';
import { NavigationService } from 'src/lib/Layout/navigation/navigation.service';

@Component({
    selector: 'app-dashboard-footer',
    templateUrl: './dashboard-footer.component.html',
    styleUrls: ['./dashboard-footer.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NgClass, NgStyle]
})
export class DashboardFooterComponent implements OnInit {
  @Input('darkmode') darkmode: boolean;

  constructor(public nS: NavigationService) {
  
  }

  ngOnInit(): void { 
   
  }

}
