import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule,
         NbDialogModule, NbSelectModule, NbStepperModule,
         NbButtonGroupModule, NbIconModule, NbToggleModule,
         NbInputModule, NbToastrModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { DashboardComponentsModule } from './dashboard-components/dashboard-components.module';
import { HomeComponent } from './home/home.component';
import { VerIndexComponent } from './ver-index/ver-index.component';
import { PetDialogComponent } from './pet-dialog/pet-dialog.component';
import { InfoComponent } from './info/info.component';
import { DarAdopcionComponent } from './dar-adopcion/dar-adopcion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerIndexComponent,
    PetDialogComponent,
    InfoComponent,
    DarAdopcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    DashboardComponentsModule,
    NbCardModule,
    NbDialogModule.forRoot(),
    NbSelectModule,
    NbStepperModule,
    NbButtonGroupModule,
    NbIconModule,
    NbToggleModule,
    NbInputModule,
    NbToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
