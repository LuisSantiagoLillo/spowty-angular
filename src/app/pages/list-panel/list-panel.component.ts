import { Component, OnInit } from '@angular/core';
import { ListService, Item } from '../../services/list.service';

@Component({
  selector: 'app-list-panel',
  templateUrl: './list-panel.component.html',
  styleUrls: ['./list-panel.component.css']
})
export class ListPanelComponent implements OnInit {
  myList: Item[];
  constructor(
    private _listService: ListService
  ) {
    this.myList = _listService.getLista();
    console.log(this.myList);
  }

  ngOnInit() {
  }

  removeItem(name: string, idTrack: string): void {
    const item: Item = {
      name: name,
      idTrack: idTrack
    };

    this._listService.removeItem(item);
    this.myList = this._listService.getLista();
  }

}
