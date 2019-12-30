import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../_services/user-managment/user-management.service';
import { CookieService } from 'ngx-cookie-service';
import { Router} from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[];
  selectedUser = [];
  selectedIndex: number = null;
  isUserSelected: boolean = false;

  constructor(private userManagement: UserManagementService, private cookieService: CookieService, private router:Router) { }

  ngOnInit() {
    this.userManagement.getUsers().subscribe(
      (data) => {
        let self = this;
        if(data.page < data.total_pages){
          this.users = this.users.concat(data.data);
          self.getNextPage(data.page);
          this.setIndex( 0,this.users[0]); ///oninit set selected user
        }
      },
      (err) => {
        console.log(err)
      }
    );
  }

  getNextPage(page){
    page = page+1;
    this.userManagement.getNextPage(page).subscribe(
      (data) => {

        if(data.page < data.total_pages){
          this.users = this.users.concat(data.data);
          this.getNextPage(data.page);
        }
        this.users = this.users.concat(data.data);
        //this.setIndex( 0,this.users[0]); ///oninit set selected user
      },
      (err) => {
        console.log(err)
      }
    );
  }

  setIndex(index: number, selectedUser) {
    this.isUserSelected = true;
    this.selectedUser = selectedUser;
    this.selectedIndex = index;
 }

}
