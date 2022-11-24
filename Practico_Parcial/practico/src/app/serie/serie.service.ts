import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Serie } from './Serie';
import {Observable} from 'rxjs'

import { environment } from 'src/environments/environment';
@Injectable({providedIn:'root'})
export class SerieService {
private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }
getSeries(): Observable<Serie[]>{
  return this.http.get<Serie[]>(this.apiUrl);
}

}
