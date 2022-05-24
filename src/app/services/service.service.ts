import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
users(user:any){
  this.http.post('https://cl2.io/ebd2d5bc-f69f-4d68-94ee-fca80fee467e/',user).subscribe(res =>{
      console.log(res)
    })
// console.log(user);
}
getuser()
{ 
  return this.http.get('https://collect2.com/api/ebd2d5bc-f69f-4d68-94ee-fca80fee467e/datarecord/')
}

}
