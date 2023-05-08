import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }
  private API_PERSONAL="https://randomuser.me/api/?results=10";

  getPersonal():Observable<any>{
    return this.http.get(this.API_PERSONAL)
  }

  postPersonal(user:any):Observable<any>{
return this.http.post(this.API_PERSONAL,user)
  }
  putNosotros(user: any, id:number): Observable<any>{
    this.API_PERSONAL=`${this.API_PERSONAL}/${id}`
    return this.http.put(this.API_PERSONAL,user)
  }
  deleteNosotros(id:number): Observable<any>{
    this.API_PERSONAL=`${this.API_PERSONAL}/${id}`
    return this.http.delete(this.API_PERSONAL)
  }
}
