import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TaskService {

  private headers : HttpHeaders;
  private serverHost : string;

  constructor(private http: HttpClient, private router: Router) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.serverHost = "http://127.0.0.1:3000/tasks/";
  }

  public getAll() {
    const endpoint = this.serverHost;
    return this.http.get(endpoint);

  }

  // read method    
  public get(id) {
    const endpoint = this.serverHost + id;
    return this.http.get(endpoint);

  }

  // create method 
  public post(body) {
    return this.http.post(this.serverHost, body);

  }
  // delete method    
  public delete(id){
    console.log(id);
    const endpoint = this.serverHost + id;
    return this.http.delete(endpoint);

  }  
  // update method    
  public update(id, body){
    const endpoint = this.serverHost + id;
    return this.http.put(endpoint, body);
  }

}
