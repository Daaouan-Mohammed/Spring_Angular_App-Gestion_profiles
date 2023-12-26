import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  constructor(public dialog: MatDialog, private _login: LoginService, private _router: Router) {}

  ngOnInit(): void {
   /* if(this._login.isLoggedIn())
    {
      this._router.navigate(['/admin'])
    }*/
}

  userInfo() {
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginFormComponent, {
      width: '30%',
      height: '70%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: false
    });
  }
}
