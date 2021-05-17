import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
// import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    psw: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
     private authservice: AuthService
  ) {}
  //   alert('hi')
  //   console.log("hii")
  // }

  // ngOnInit() {
  //   alert('page loaded')
  // }

  signup(): void {
    // this.authservice.signup(this.signupForm.value).subscribe((msg: any) => {
    //   console.log(msg);
    //   //this.router.navigate(["login"]);
    // });
    const data = {
      //name: this.signupForm.get('name'),
      //description: this.signupForm.get('email'),
     // date: this.signupForm.get('password'),
     "name": this.signupForm.value.name,
     "email": this.signupForm.value.email,
     "password": this.signupForm.value.password,
    };
    //alert(data.psw);
    //alert(data.password);
    //var res = JSON.stringify(newEvent)
    //let jsonObject: any = JSON.parse.email;
    //alert(res);
   // alert(data);
    this.authservice.create(data)
    .subscribe(
      response => {
        alert(response);
        //this.submitted = true;
      },
      error => {
        alert(JSON.stringify(error));
        //alert(JSON.stringify(error.text));
      });
  }
}
