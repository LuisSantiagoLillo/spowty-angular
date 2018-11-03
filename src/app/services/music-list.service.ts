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
    this.lists.forEach((itemList) => {
      if ( itemList.name === name ) {
        complete = true;
        itemList.items.push(item);
      }
    });
    if (complete) { this.saveStorageLists(); }
    return complete;
  }

  removeItemtoList(list: Lists, item: Item): boolean {
    let complete = false;
    list.items = list.items.filter( itemList => {
      return itemList.name !== item.name;
    });

    this.lists = this.lists.filter(itemList => {
      return itemList.name !== list.name;
    });

    this.lists.push(list);
    complete = true;
    if (complete) { this.saveStorageLists(); }
    return complete;
  }

  removeList(list: Lists) {
    this.lists = this.lists.filter(itemList => {
      return itemList.name !== list.name;
    });
    this.saveStorageLists();
  }

  changeList(list: Lists, name: string, description: string) {
    this.lists = this.lists.filter(itemList => {
      return itemList.name !== list.name;
    });
    list.name = name;
    list.description = description;
    this.lists.push(list);
    this.saveStorageLists();
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
