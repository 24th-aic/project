import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './register';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url:string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  
  constructor(private http:HttpClient) { }

  getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(
      this.url+"/user"
    );
  }
  
  addUsers(user):Observable<any>{
    return this.http.post<any>(
      this.url + "/user",
      user,
      {headers:this.headers}
    );
  }
  
  updateUsers(user: Users,id: string):Observable<Users>{
    return this.http.put<Users>(
      this.url+"/user/"+id,user,
	  {headers:this.headers}
    );
  }

  deleteUsers(id: string):Observable<any>{
    return this.http.delete<any>
      (this.url+ "/user/"+id

    );
  }


}
