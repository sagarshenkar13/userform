import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from './user';
@Injectable({
  providedIn: 'root'
})

export class UserService {
private _url: string = "https://reqres.in/api/users?page=1"
  constructor(private http: HttpClient) {
    this.getUser().subscribe(data => {
      console.log(data);
  });
}
   public  getUser(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this._url);
}

getUserDetail(id: number) {
  var eventDetail: any[] = [];
  this.getUser().subscribe(res => {
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
}
