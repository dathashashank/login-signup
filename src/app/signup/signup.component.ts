import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent {
  constructor(
    private router:Router
  ){}

  loginnav(){
    this.router.navigate(['/login'])
  }
}

// function loginFormvalidtate(){
//   const email = document.getElementById("loginemail").value;
//   const password = document.getElementById("loginpassword").value;

//   const emailEr = document.getElementById("lemail-error");
//   const passEr = document.getElementById("lpassword-error");

//   emailEr.textContent = "";
//   passEr.textContent = "";

//   let validatelogindetails= true;

//   if (email === "example@gmail.com"){
//   validatelogindetails= true;
//   }
//   else{
//       emailEr.textContent = "please enter the correct email id";
//       validatelogindetails = false;
//   }

//   if(password === "123456"){
//       validatelogindetails = true;
//   }
//   else{
//       passEr.textContent = "Invalid Password";
//       validatelogindetails = false;
//   }

//   if(validatelogindetails){
//       alert("you have logged in successfully");
//       resetlogindetails();
//       return true;
//   }
//   else{
//       return false;
//   }
// }

// function resetlogindetails(){
//   document.getElementById("loginemail").value = "";
//   document.getElementById("loginpassword").value = "";
// }