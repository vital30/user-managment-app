import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { faGlobeAfrica, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  globeIcon:any;
  signOutIcon:any;

  constructor( private cookieService: CookieService, private router:Router) { }

  ngOnInit() {
    this.globeIcon = faGlobeAfrica;
    this.signOutIcon=faSignOutAlt;
  }
 
  logout() {
    this.cookieService.delete('idToken');
    this.router.navigate(['/login']);
  }
}
