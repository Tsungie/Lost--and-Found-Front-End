import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item, ItemForm } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  // generate array 15 items where province is harare or bulawayo
  items = [
    {
      id: 1,
      date: new Date(),
      description: 'description 1',
      province: 'Harare',
      trackNumber: 1,
      status: 'Pending'
    },
    {
      id: 2,
      date: new Date(),
      description: 'description 2',
      province: 'Bulawayo',
      trackNumber: 2,
      status: 'Pending'
    },
    {
      id: 3,
      date: new Date(),
      description: 'description 3',
      province: 'Harare',
      trackNumber: 3,
      status: 'Pending'
    },
    {
      id: 4,
      date: new Date(),
      description: 'description 4',
      province: 'Bulawayo',
      trackNumber: 4,
      status: 'Pending'
    },
    {
      id: 5,
      date: new Date(),
      description: 'description 5',
      province: 'Harare',
      trackNumber: 5,
      status: 'Pending'
    },
    {
      id: 6,
      date: new Date(),
      description: 'description 6',
      province: 'Bulawayo',
      trackNumber: 6,
      status: 'Pending'
    },
  ]

  constructor(private http: HttpClient) { }

  getAll(): Observable<Item[]> {
    // return this.http.get<Item[]>(`http:\\localhost:3000\items`);
    return of(this.items);
  }

  add(item: ItemForm): Observable<any> {
    return this.http.post(`http:\\localhost:3000\items`, item);
  }

  edit(item: Item) {
    return this.http.put(`http:\\localhost:3000\items\${item.id}`, item);
  }
}
