import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
 
  
  constructor(private formBuilder:FormBuilder , private http: HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.signupForm= this.formBuilder.group({
      fullName:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required]
    })

    
  }
  signUp(){
      this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
      .subscribe({ 
      next: (res)=>{
      this.signupForm.reset()
      this.router.navigate(['login'])
    }
  
 })
  }
  onSubmit(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value)
      alert('registration successful')
      this.signUp()
    }
    else{
      this.validateAllFormFields(this.signupForm)
      alert('Please fill the full details properly')
    } 
   }
   validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach((field)=>{
      const control = formGroup.get(field)
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
   }
}
