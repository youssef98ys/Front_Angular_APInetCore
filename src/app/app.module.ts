import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { routes} from './routes';
import { PatientService} from './patient.service';
import { HttpClientModule} from '@angular/common/http';
import { AjouterComponent } from './ajouter/ajouter.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PatientComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(routes), FormsModule
  ],
  providers: [PatientService],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
