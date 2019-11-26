import { Component  } from '@angular/core';
import { ReportsService } from '../report.service';
import { Reports } from '../report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
	
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

	addReports(){
    var report = new Reports();
    report.username = this.username;
    report.game = this.game;
    report.report = this.report;
    report.status = this.status;
    report.datereported = this.datereported;
  	report.solution = this.solution;
    report.datesolved = this.datesolved;

    
    this.reportsService.addReports(report)
      .subscribe((data)=>{
        console.log(data);
          this.getReports();
          alert("You have successfully submitted your report!");
          this.username="";
          this.game="";
          this.report="";
      });
    
  }
    
  updateReports(id){
	  var report = new Reports();
    report.username = this.username;
    report.game = this.game;
    report.report = this.report;
    report.status = this.status;
    report.datereported = this.datereported;
  	report.solution = this.solution;
    report.datesolved = this.datesolved;

    this.reportsService.updateReports(report,id)
      .subscribe((data)=>{
        this.getReports();
        console.log(data);
        alert("Record has been updated!");
        this.username="";
        this.game="";
        this.report="";
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
