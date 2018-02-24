import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Patient } from '../../models/patient';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/patients');
  }

  // getAll(): Observable<Patient[]> {
  //   return this.http.get<Patient[]>('//localhost:8080/patients');
  // }

}
