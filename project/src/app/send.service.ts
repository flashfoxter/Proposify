import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendService {

  constructor(private http: HttpClient) { }
  sendMessage (from,email, subject,message,file) { 
    const obj = {
      from:from,
      email: email,
      subject: subject,
      message:message,
      file:file,
      };
    return this.http.post('http://localhost:3000/Thanks',obj).subscribe(res => console.log('value recived'));   
    }
}
