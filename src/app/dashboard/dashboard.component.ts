import { Component  } from '@angular/core';
import { ReportsService } from './dashboard.service';
import { Reports } from './dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
	
	private reports:Reports[];
    private username:String;
    private game:String;
    private report:String;
    private status:String;
    private datereported:Date;
  	private solution:String;
    private datesolved:Date;
	
	constructor(private reportsService:ReportsService ) { }

	ngOnInit(){
		this.getReports();
	}
	
	getReports(){
    this.reportsService.getReports()
      .subscribe((data)=>{
        this.reports = data;
      });
  }
  

  
  
	deleteReports(id){
		 if(confirm("Are you sure you want to delete this User?")){
			this.reportsService.deleteReports(id)
				.subscribe((data)=>{
				console.log(data);
				this.getReports();
			});
		}
  }

  
	
}
