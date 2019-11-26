import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reports } from './report';
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
  
  addReports(report):Observable<any>{
    return this.http.post<any>(
      this.url + "/report",
      report,
      {headers:this.headers}
    );
  }
  
  updateReports(report: Reports,id: string):Observable<Reports>{
    return this.http.put<Reports>(
      this.url+"/report/"+id,report,
	  {headers:this.headers}
    );
  }

  deleteReports(id: string):Observable<any>{
    return this.http.delete<any>
      (this.url+ "/report/"+id

    );
  }


}
