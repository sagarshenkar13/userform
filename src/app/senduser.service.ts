
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Iuser } from './user';



@Injectable({
  providedIn: 'root'
})
export class SenduserService {
private _url: string = "https://reqres.in/api/users/<id"

  constructor(private http: HttpClient) {
    this.getUser().subscribe(data => {
      console.log(data);
  });
   }

   public   getUser(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this._url);
}

}
