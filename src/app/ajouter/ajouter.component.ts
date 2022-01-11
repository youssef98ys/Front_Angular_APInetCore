import { Component, OnInit } from '@angular/core';
import {Patient} from '../models/Patient';
import { PatientService} from '../patient.service';
import { Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  p: any;
  patient: Patient;
  action: string;
  id: string;
  constructor(private route: ActivatedRoute, private service: PatientService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.action = 'Modifier';
      this.service.getPatient(this.id).subscribe(data => this.p = data);
    } else {
      this.action = 'Ajouter';
    }
  }
  ajouterPatient(value: any) {
    this.service.setPatient(value).subscribe();
  }
  modifierPatient(id: string, value: any) {
    value.id = this.id;
    this.service.updatePatient(id, value).subscribe();
  }

}
