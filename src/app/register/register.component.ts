import { Component  } from '@angular/core';
import { UsersService } from './register.service';
import { Users } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'gaming';
  private users:Users[];
  private Username: String;
  private Userage: Number;
  private Useraddress: String;
  private Usergender: String;
  private Uname: String;
  private Userpass: String;
  
  
  constructor(private usersService:UsersService ) { }

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers()
      .subscribe((data)=>{
        this.users = data;
      });
  }

  addUsers(){
    var user = new Users();
    user.name = this.Username;
    user.age = this.Userage;
    user.address = this.Useraddress;
    user.gender = this.Usergender;
    user.username = this.Uname;
    user.password = this.Userpass;

    
    this.usersService.addUsers(user)
      .subscribe((data)=>{
        console.log(data);
          this.getUsers();
          alert("You have successfully registered!");

          this.Username = "";
          this.Userage = null;
          this.Useraddress = "";
          this.Usergender = "";
          this.Uname = "";
          this.Userpass = "";
         
      });
    
  }
    
  updateUsers(id){
    var user = new Users();
    user.name = this.Username;
    user.age = this.Userage;
    user.address = this.Useraddress;
    user.gender = this.Usergender;
    user.username = this.Uname;
    user.password = this.Userpass;

    this.usersService.updateUsers(user,id)
      .subscribe((data)=>{
        console.log(data);
          this.getUsers();
      });
    
  }
  
  
	deleteUsers(id){
		 if(confirm("Are you sure you want to delete this User?")){
			this.usersService.deleteUsers(id)
				.subscribe((data)=>{
				console.log(data);
				this.getUsers();
			});
		}
  }


}
