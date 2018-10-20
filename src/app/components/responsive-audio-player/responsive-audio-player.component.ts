import { Component, OnInit, Input } from '@angular/core';
import { ListService, Item } from 'src/app/services/list.service';

@Component({
  selector: 'app-responsive-audio-player',
  templateUrl: './responsive-audio-player.component.html',
  styleUrls: ['./responsive-audio-player.component.css']
})
export class ResponsiveAudioPlayerComponent implements OnInit {
  @Input() track: any;

  constructor(
    private _listService: ListService
  ) { }

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
