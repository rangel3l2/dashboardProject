import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardGrathsComponent } from './dashboard/card-graths/card-graths.component';
import { CardsIntroComponent } from './dashboard/cards-intro/cards-intro.component';
import { LineChartComponent } from './dashboard/card-graths/line-chart/line-chart.component';
import { TableDataComponent } from './dashboard/table-data/table-data.component';
import { BarChartComponent } from './dashboard/card-graths/bar-chart/bar-chart.component';
import { EcomerceComponent } from './ecomerce/ecomerce.component';
import { CalendaryComponent } from './calendary/calendary.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


const COMPONENTS = [
  SideBarComponent,
  MenuBarComponent,
  FooterComponent,
  DashboardComponent,
  CardGrathsComponent,
  CardsIntroComponent,
  LineChartComponent,
  TableDataComponent,
  BarChartComponent,
  EcomerceComponent,
]
@NgModule({
  declarations: [COMPONENTS, CalendaryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),


  ],
  exports:[
    COMPONENTS,
  ]

})
export class ComponentsModule { }
