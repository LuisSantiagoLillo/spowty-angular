import { Component, OnInit } from '@angular/core';
import { MusicListService, Lists, Item } from 'src/app/services/music-list.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {
  myLists: Lists[];
  listSelected: Lists;
  listName = 'New list name';
  listDescription = 'New list description';
  optionDrop = false;
  listMessage = 'Do it!';
  // ** Error
  error = false;
  title = '';
  message = '';
  color = '';
  // ********
  constructor(
    private _listService: MusicListService,
  ) {
    this.myLists = _listService.getLists();
   }

  ngOnInit() {
  }
  changeInputList() {
    const selector = document.getElementById('selectList');
    this.listSelected = this._listService.getList(selector[selector.selectedIndex].value);
    this.listName = this.listSelected.name;
    this.listDescription = this.listSelected.description;
  }

  optionChanged() {
    this.optionDrop = !this.optionDrop;
    if (this.optionDrop) {
      this.listMessage = 'Drop it!';
    } else {
      this.listMessage = 'Do it!';
    }
  }

  listChanged() {
    if (this.optionDrop) {
        this._listService.removeList(this.listSelected);
        this.myLists = this._listService.getLists();
        this.showError('OK, the list has been removed.', 'success');
    } else {
      // Cazar la lista y los input y modificar los datos
      console.log('modificar la lista');
      const name = document.getElementById('listName').value;
      const description = document.getElementById('listDescription').value;
      if (name != null && name !== '') {
        console.log(name, description);
        this._listService.changeList(this.listSelected, name, description);
        this.myLists = this._listService.getLists();
        document.getElementById('listName').value = '';
        document.getElementById('listDescription').value = '';
        this.showError('Perfect, name details has been changed.', 'success');

      } else {
        this.showError('Remember, name list is required.', 'warning');
      }

    }
  }

  showError(message: string, color: string) {
    this.message = message;
    this.color = color;
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }

}
