import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models';
import { ItemsService } from '../../services';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent {
  items$: Observable<Item[]> = this.itemsService.getAll();
  itemForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private itemsService: ItemsService
  ) {
    this.itemForm = this.fb.group({
      status: ['', Validators.required],
    });
  }

  onEdit(item: Item): void {
    this.itemsService.edit(item);
  }
}
