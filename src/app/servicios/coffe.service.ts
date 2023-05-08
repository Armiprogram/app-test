import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoffeService {

  constructor(private http:HttpClient) { }

  private API_COFFE="http://localhost:3000/cafe"


  getCoffe():Observable<any>{
    return this.http.get(this.API_COFFE)
  }
}
