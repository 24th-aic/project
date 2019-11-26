import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reports } from './dashboard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private url:string = "http://localhost:81";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  
  constructor(private http:HttpClient) { }

  getReports():Observable<Reports[]>{
    return this.http.get<Reports[]>(
      this.url+"/report"
    );
  }
  
   addAgent(report: Reports,id: string):Observable<Reports>{
    return this.http.put<Reports>(
      this.url+"/agent/"+report,id,
	  {headers:this.headers}
    );
  }

  deleteReports(id: string):Observable<any>{
    return this.http.delete<any>
      (this.url+ "/report/"+id

    );
  }


}
