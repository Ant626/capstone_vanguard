  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Funding Force';
  faCoffee = faCoffee;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  localStorageFull(){
    let result = window.localStorage.getItem("firstName");
    if(result != "" || null){
      return true;
    }
    else{
      return false;
    }
  }

  localStorageEmpty(){
    let result = window.localStorage.getItem("firstName");
    if(result == "" || null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/fundingforce/login']);
  }

}
