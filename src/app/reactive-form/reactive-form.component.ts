import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Entered Value : ', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
