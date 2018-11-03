import { Component, OnInit } from '@angular/core';
import { MusicListService, Lists, Item } from 'src/app/services/music-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-panel',
  templateUrl: './list-panel.component.html',
  styleUrls: ['./list-panel.component.css']
})
export class ListPanelComponent implements OnInit {
  newListHide: boolean = false;
  // myList: Item[];
  myLists: Lists[];
  error: boolean = false;
  title: string = '';
  message: string = '';
  color: string = 'warning';
  // Collapse List
  collapse: boolean = true;
  stringCollapse: string = '';

  constructor(
    private _listService: MusicListService,
    private router: Router
  ) {
    this.myLists = _listService.getLists();
  }

  ngOnInit() {
  }

  collapseList() {
    this.collapse = !this.collapse;
    if (this.collapse) {
        this.stringCollapse = 'Hide List';
    } else {
      this.stringCollapse = 'Show List';
    }
  }
  navigateList(list: Item) {
    this.router.navigate(['/list', list]);
  }

  removeItem(name: string, idTrack: string): void {
    const item: Item = {
      name: name,
      idTrack: idTrack
    };

    // this._listService.removeItem(item);
    // this.myList = this._listService.getLista();
  }

  showError(message: string, color: string) {
    this.message = message;
    this.color = color;
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }

  createNewList() {
    // console.log(document.getElementById('name').value);
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let desc = (document.getElementById('desc') as HTMLInputElement).value;
    // Check if the name is declared
    if (name === '' || name === undefined) {
      this.showError('Please set the list name', 'info');
    } else {
      // Check if the name EXIST
      if ( this._listService.checkNameList(name) ) {
        this.showError('The name is used.', 'warning');
      } else {
        this._listService.createNewList(name, desc);
        this.showError('New list ' + name + ' has been created.', 'success');
        (document.getElementById('name') as HTMLInputElement).value = '';
        (document.getElementById('desc') as HTMLInputElement).value = '';
      }
    }
  }


}
