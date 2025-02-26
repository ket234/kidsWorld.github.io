import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormBuilder ,FormGroup, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'console';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm !: FormGroup
  constructor(private formBuilder:FormBuilder, private http:HttpClient,private router: Router)  { }

  ngOnInit(): void {
  this.loginForm= this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required]
})
  }

  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe({
      next:(res=>{
        const user=res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if(user){
          alert('login successful');
          this.loginForm.reset();
          this.router.navigate(['home']);
        }else {
          alert('Please enter valid email-id & password ')
        }
       })
   // error:(err=>{
     // alert('');})
    
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }else{
     // console.log('form is not valid')
     this.validateAllFormFields(this.loginForm)
     alert('Form is invalid')
    }
  }

  validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf: true});
      }
      else if (control instanceof FormGroup){
        this.validateAllFormFields(control);
      }
    });
  }
  
}
