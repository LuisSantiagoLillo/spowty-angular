import { Component, OnInit, Input} from '@angular/core';
import { ListService, Item } from '../../services/list.service';

@Component({
  selector: 'app-song-iframe',
  templateUrl: './song-iframe.component.html',
  styleUrls: ['./song-iframe.component.css']
})
export class SongIframeComponent implements OnInit {
  lessIframe: boolean = screen.width <= 1200 && screen.width >= 570;

  @Input() track: any;

  constructor(
    private _listService: ListService
  ) {}

  ngOnInit() {
  }


  addItem(name: string, idTrack: string): void {
    const item: Item = {
      name: name,
      idTrack: idTrack
    };

    this._listService.addItem(item);
  }

  isAdded(name: string, idTrack: string): boolean {
    const item: Item = {
      name: name,
      idTrack: idTrack
    };
    return this._listService.isAdded(item);
}

}
