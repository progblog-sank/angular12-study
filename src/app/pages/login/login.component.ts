import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment.login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    userName: [''],
    password: [''],
  });
  hide = true;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    const isUserName = environment.userName === this.loginForm.value.userName
    const isPassword = environment.password === this.loginForm.value.password
    if (isUserName && isPassword) {
      console.log("login")
    } else {
      this.openSnackBar("失敗しました。")
    }
  }

  openSnackBar(msg: string) {
    let snackBarRef = this.snackBar.open(msg, 'close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
    snackBarRef.afterDismissed().subscribe(() => {
      this.loginForm.patchValue({
        userName: '',
        password: '',
      })
    });
  }

}
