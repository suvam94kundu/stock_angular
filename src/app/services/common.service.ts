import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  addSymbol(user){
    return this._http.post('http://localhost:3000/stocks',user.value);
  }
  getStockListing(){
    return this._http.get('http://localhost:3000/stocks');
  }
  deleteSymbol(id){
    return this._http.delete('http://localhost:3000/stocks/'+id);
  }
  viewDetails(id){
    return this._http.get('http://localhost:3000/stocks/'+id);
  }
}
