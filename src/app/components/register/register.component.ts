import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: UntypedFormGroup;

  constructor(fb: UntypedFormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['CLIENT', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.authService.register(this.registerForm.value).subscribe((result: any) => {
      if (result.success) {
        this.router.navigate(['/login']);
      }
    }
    );
  }

}
