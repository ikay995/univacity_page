import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './navigation/main-nav/main-nav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { VerticalNavComponent } from './navigation/vertical-nav/vertical-nav.component';


@NgModule({
  imports: [
    CommonModule,
    MainNavComponent,
    NavigationComponent,
    DashboardModule,
    VerticalNavComponent
  ],
  exports: [
 
  ],
})
export class LayoutModule {}
