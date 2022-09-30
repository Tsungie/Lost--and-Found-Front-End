export interface ItemForm {
  date: Date;
  description: string;
  province: string;
  trackNumber: number;
}

export interface Item {
  id: number;
  date: Date;
  description: string;
  province: string;
  trackNumber: number;
  status: string;
}
