import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormcandidateService {


  constructor(private  http: HttpClient) { }

  getAllCandidate() {
    return this.http.get('http://localhost:8080/candidates');
  }

  Inscri(url, data) {
    return this.http.post(url, data);
  }

}
