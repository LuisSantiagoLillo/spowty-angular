import { Component, OnInit, Input} from '@angular/core';
import { MusicListService, Item, Lists } from 'src/app/services/music-list.service';

@Component({
  selector: 'app-song-iframe',
  templateUrl: './song-iframe.component.html',
  styleUrls: ['./song-iframe.component.css']
})
export class SongIframeComponent implements OnInit {
  lessIframe: boolean = screen.width <= 1200 && screen.width >= 570;

  @Input() track: any;
  newListHide: boolean = false;
  error: boolean = false;
  title: string = '';
  message: string = '';
  color: string = '';
  optionSelected = '';

  lists: Lists[];

  constructor(
    private _listService: MusicListService
  ) {
    this.lists = _listService.getLists();

  }

  ngOnInit() {
  }

  showError(message: string, color: string) {
    this.message = message;
    this.color = color;
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }

  addItem(name: string, idTrack: string): void {
    const item: Item = {
      name: name,
      idTrack: idTrack
    };
    const nameList = this.optionSelected;
    this.error = this._listService.addNewItemtoList(nameList, item);
    if (!this.error) {
      this.showError('The list name not exist', 'danger');
    } else {
      this.newListHide = !this.newListHide;
    }
  }

}
