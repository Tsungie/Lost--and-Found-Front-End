import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { ItemsService } from '../../services';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  itemForm: UntypedFormGroup;
  randomNumber$: Observable<number[]>;
  provinces = [
    'Bulawayo',
    'Harare',
    'Manicaland',
    'Mashonaland Central',
    'Mashonaland East',
    'Mashonaland West',
    'Masvingo',
    'Matabeleland North',
    'Matabeleland South',
    'Midlands',
  ];

  constructor(
    private fb: UntypedFormBuilder,
    http: HttpClient,
    private itemService: ItemsService,
    private router: Router
  ) {
    this.randomNumber$ = http.get<number[]>(
      'http://www.randomnumberapi.com/api/v1.0/randomnumber'
    );

    this.itemForm = fb.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      province: ['', Validators.required],
      trackNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.randomNumber$.subscribe((result: number[]) => {
      this.itemForm.patchValue({
        trackNumber: result[0],
      });
    });
  }

  onSubmit(): void {
    this.itemService
      .add(this.itemForm.value)
      .pipe(take(1))
      .subscribe((result: any) => {
        if (result.success) {
          this.itemForm.reset();
          this.router.navigate(['/items']);
        }
      });
  }
}
