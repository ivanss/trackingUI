import { Component, OnInit } from '@angular/core';

import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';


import { PatientService } from '../shared/patient/patient.service';
import { Patient } from '../models/patient';



@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Array<Patient[]>;
  // dataSource = new PatientDataSource(this.patientService);
  // displayedColumns = ['code', 'name'];
  constructor(private patientService: PatientService) { }
  ngOnInit() {
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    });
  }
}


// export class PatientDataSource extends DataSource<any> {

//   constructor(private patientService: PatientService) {
//     super();
//   }

//   connect(): Observable<Patient[]> {
//     return this.patientService.getAll();
//   }

//   disconnect() {}
// }