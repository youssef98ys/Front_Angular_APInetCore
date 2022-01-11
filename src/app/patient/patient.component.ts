import { Component, OnInit } from '@angular/core';
import { Patient} from '../models/Patient';
import { PatientService} from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: any;
  constructor(private service: PatientService) { }

  ngOnInit() {
    this.service.getPatients().subscribe(data => this.patients = data);
  }
  supprimerPatient(id: string) {
    return this.service.deletePatient(id).subscribe();
  }

}
