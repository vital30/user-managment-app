import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UserManagementService} from '../../_services/user-managment/user-management.service';
import { faTachometerAlt, faFile, faNewspaper, faUserFriends, faInfoCircle, faLifeRing, faCog } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  sidebar = [
    {
      itemName: "Dashboard",
      icon: faTachometerAlt
    },
    {
      itemName: "Files",
      icon: faFile
    },
    {
      itemName: "News",
      icon: faNewspaper
    },
    {
      itemName: "Users",
      icon: faUserFriends,
      router: 'users'
    },
    {
      itemName: "FAQ",
      icon: faInfoCircle
    },
    {
      itemName: "Help",
      icon: faLifeRing
    },
    {
      itemName: "Settings",
      icon: faCog
    }

  ];

  teacher:any = [];
  selectedIndex: number = null;

  constructor(private userManagement: UserManagementService) { }

  ngOnInit() {
      this.userManagement.getTeacher().subscribe(
        (data) => {
         this.teacher = data.data;
         this.setIndex(3);
        },
        (err) => {
          console.log(err)
        }
      );
    }

    setIndex(index: number) {
      this.selectedIndex = index;
   }

  
}
