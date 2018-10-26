import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicListService {

  list: Item[] = [];
  lists: Lists[] = [];

  constructor() {
    this.loadStorageLists();
  }

  // GETTER and SETTER functions
  getLists(): Lists[] {
    return this.lists;
  }

  getList(nameList: string): Lists {
    let itemResolved: Lists;
    this.lists.forEach((item) => {
        if (item.name === nameList) {
          itemResolved = item;
        }
    });
    return itemResolved;
  }

  createNewList(nameList, desc) {
    const newList: Lists = {
      name: nameList,
      description: desc,
      items: []
    };
    this.lists.push(newList);
    this.saveStorageLists();
  }

  addNewItemtoList(name: String, item: Item): boolean {
    let complete = false;
    this.lists.forEach((itemLista) => {
      if ( itemLista.name === name ) {
        complete = true;
        itemLista.items.push(item);
      }
    });
    if (complete) { this.saveStorageLists(); }
    return complete;
  }

  removeItemtoList(name: String, item: Item): boolean {
    let complete = false;
    this.lists.forEach((itemLista) => {
      if ( itemLista.name === name ) {
        itemLista.items.push(item);
        complete = true;
      }
    });
    if (complete) { this.saveStorageLists(); }
    return complete;
  }

  checkNameList(name: string): boolean {
    const item = this.lists.find( itemList => {
      return itemList.name === name;
    });
    if ( item === undefined) {
      return false;
    } else {
      return true;
    }
  }


  // ************************************************************ //
  // MANAGE THE STORAGE
  saveStorageLists() {
    localStorage.setItem('myLists', JSON.stringify(this.lists));
  }
  loadStorageLists() {
    if (localStorage.getItem('myLists')) {
      this.lists = JSON.parse(localStorage.getItem('myLists'));
    } else {
      this.lists = [];
    }
  }
  // ************************************************************ //



}


export interface Item {
  name: string;
  idTrack: string;
}

export interface Lists {
  name: string;
  description: string;
  items: Item[];
}
