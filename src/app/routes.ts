import { Routes } from '@angular/router';

import { PatientComponent} from './patient/patient.component';
import {AjouterComponent} from './ajouter/ajouter.component';

export const routes: Routes = [
  { path: 'patient',  component: PatientComponent },
  { path: 'ajouter',  component: AjouterComponent },
  { path: 'ajouter/:id',  component: AjouterComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];
