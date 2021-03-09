import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { DashboardComponentsModule } from './dashboard-components/dashboard-components.module';
import { HomeComponent } from './home/home.component';
import { VerIndexComponent } from './ver-index/ver-index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    DashboardComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }