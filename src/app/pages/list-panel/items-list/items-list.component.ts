import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicListService, Lists, Item } from '../../../services/music-list.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  visible = false;
  listSelected: Lists;
  itemSelected: Item;
  // Elementos for the modal
  newListHide: boolean = false;
  error: boolean = false;
  title: string = '';
  message: string = '';
  color: string = '';
  optionSelected = '';

  lists: Lists[];

  constructor(
    private router: ActivatedRoute,
    private _listService: MusicListService
  ) {
    this.lists = _listService.getLists();
    this.router.params.subscribe( params => {
      this.listSelected = this._listService.getList(params.id);
      if (this.listSelected.items.length <= 0) { this.visible = true; } else { this.visible = false; }
      console.log(this.listSelected.items);
    });
  }

  ngOnInit() {
  }

      // FUNCTIONS TO THE MODAL
      showError(message: string, color: string) {
        this.message = message;
        this.color = color;
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 5000);
      }

      itemAdded(item) {
        this.newListHide = !this.newListHide;
        this.itemSelected = item;

      }

      addItem(): void {
        const item: Item = {
          name: this.itemSelected.name,
          idTrack: this.itemSelected.idTrack
        };
        const nameList = this.optionSelected;
        this.error = this._listService.addNewItemtoList(nameList, item);
        if (!this.error) {
          this.showError('The list name not exist', 'danger');
        } else {
          this.listSelected = this._listService.getList(this.listSelected.name);
          this.newListHide = !this.newListHide;
        }
      }

      removeItem(): void {

      }


}
