import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit{
  registerForm!: FormGroup;
  data : any[] = [];
  constructor(private fb: FormBuilder, private service : DataService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  ngOnInit(): void {
    this.service.getData().subscribe(res => {
      
         this.data = res.products
        // this.data = products.filter((val) => val.name !== undefined)
        console.log(this.data)
      })
      
    
  }
}

