import { Component } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: UntypedFormGroup;

  constructor(
    fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe((result: any) => {
      if (result.success) {
        this.router.navigate(['/items']);
      }
    });
  }
}
