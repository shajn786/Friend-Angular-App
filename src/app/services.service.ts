import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http :HttpClient) { }

  fetchFriends= ()=>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }

  addFreind=(dataToSend:any)=>
  {
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",dataToSend)
  }

}
