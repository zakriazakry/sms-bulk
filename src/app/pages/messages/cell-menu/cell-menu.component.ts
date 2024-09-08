import { Component, inject, OnInit } from '@angular/core';
import { NB_WINDOW, NbMenuService } from '@nebular/theme';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { AgPromise, ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-cell-menu',
  templateUrl:'./cell-menu.component.html',
  styleUrl: './cell-menu.component.scss'
})
export class CellMenuComponent implements OnInit,ICellRendererAngularComp{
  items = [
    {
      title:'Save to Archive'
    },
    {
      title:'Edit'
    },
    {
      title:'Delete'
    },
  ]
  value :any;
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
   return false;
  }
  window = inject(NB_WINDOW);
  constructor(private nbMenuService: NbMenuService) {
  }

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .subscribe(item =>
        {
          console.log(item);
          if (this.items.some((res) => res.title ==item.item.title)) {
            this.window.alert(`${item.item.title} was clicked!`);
          }
        }
      );
  }
}
