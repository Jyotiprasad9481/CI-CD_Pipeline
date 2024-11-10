import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
    url :string = "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/data.json"

   
   getData(): Observable<any>{
    return this.http.get<any>(`${this.url}`).pipe(
      catchError((error)=>{
        console.error('An error occured', error)
        return throwError(error || 'Server Error')
      })
    )
   }
}
