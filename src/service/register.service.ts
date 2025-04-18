import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Roles } from 'src/app/models/Roles';
import { Users } from 'src/app/models/Users';
import { UserAddress } from 'src/app/models/UserAddress';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  register(data: any): Observable<string> {
  var user:Users = new Users();
  user.contactNumber=data.contactNumber;
  user.emailId=data.emailId;
  user.userName=data.userName;
  user.password=data.password
  var roles:Roles[]=[];
    var role:Roles = new Roles();
    role.roleType=data.userRole;
    roles.push(role);
    user.roles=roles;
if(data.resState != ''){
  var address:UserAddress = new UserAddress();
address.userState=data.resState;
address.addressLine1=data.addressLine1;
address.addressLine2=data.addressLine2;
address.area=data.area;
address.city=data.city;
address.pincode=data.pincode;
address.userAddressName=data.addressName;

user.addressList.push(address);
 
  console.log(address)

}
        return this.http.post(environment.registerUser,user,{responseType:"text"});
  }

}