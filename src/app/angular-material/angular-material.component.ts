import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {
  loginForm! : FormGroup ;
  constructor(private fb : FormBuilder){
    this.loginForm = this.fb.group({
      name : ['', [Validators.required, Validators.minLength(4)]],
      email : ['', [Validators.required, Validators.email]],
      phoneNumber : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }else{
      this.loginForm.markAllAsTouched();
    }
  }

}
