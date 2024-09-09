import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatemangmentService {
 private data = signal('');
  setData(value:string){
    this.data.set(value);
  }
  getData(){
    return this.data;
  }
  constructor() { }
}
