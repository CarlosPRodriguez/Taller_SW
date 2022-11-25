import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Serie } from './Serie';
import {Observable} from 'rxjs'

import { environment } from 'src/environments/environment';
import { SerieDetail } from './SerieDetail';
@Injectable({providedIn:'root'})
export class SerieService {
private apiUrl = environment.baseUrl+ 'series.json';

constructor(private http: HttpClient) { }
getSeries(): Observable<SerieDetail[]>{
  return this.http.get<SerieDetail[]>(this.apiUrl);
}

}
