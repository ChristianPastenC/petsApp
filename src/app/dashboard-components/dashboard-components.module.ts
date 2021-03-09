import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { 
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbButtonModule,
  NbTabsetModule,
  NbCardModule,
} from '@nebular/theme';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [FooterComponentComponent, HeaderComponentComponent, CarouselComponent],
  imports: [
    CommonModule,

    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbMenuModule,
    RouterModule,
    NbButtonModule,
    NbTabsetModule,
    NbCardModule,
    NbMenuModule.forRoot()
  ],
  exports:[
    HeaderComponentComponent,
    FooterComponentComponent
  ]
})
export class DashboardComponentsModule { }
