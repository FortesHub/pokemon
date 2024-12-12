import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private FormBuilder = inject(FormBuilder);
  loginFormGroup = this.FormBuilder.group({
    'username': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  });
  invalidCredentials = false;
  login() {

  }
}
