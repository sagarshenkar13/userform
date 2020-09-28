import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { Iuser } from '../user';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllusersService {
  private _url: string = "../assets/users.json"
  
    constructor(private http: HttpClient) {
  //     this.getUser().subscribe(data => {
  //       console.log(data);
  //  });
  //    }
  
  //    public  getUser(): Observable<Iuser[]>{
  //    return this.http.get<Iuser[]>(this._url);
 }
  
  

  public getAllEvents() {
    return this.http.get(this._url)
      .pipe(
        // tap(Events => console.log()),
        catchError(this.handleError('getEvents', []))
      );
  }
  public getEventDetail(id: number) {
    var eventDetail: any[] = [];
    this.getAllEvents().subscribe(res => {
      for (let data of res['data']) {
        if (id === data.id) {
          eventDetail.push(data);
          return eventDetail;
          break;
        }
      }

    });
    return eventDetail;
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    
    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
    }
  










  
  }
  