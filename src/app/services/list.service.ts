import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  lista: Item[] = [];
  listas: Listas[] = [];

  constructor() {
    this.cargarStorage();
    this.cargarStorageListas();
  }
 // ALL HAS BEEN DEPRECATED AND REPLACED BY MUSIC-LIST-SERVICE //
 // ALL HAS BEEN DEPRECATED AND REPLACED BY MUSIC-LIST-SERVICE //
 // ALL HAS BEEN DEPRECATED AND REPLACED BY MUSIC-LIST-SERVICE //
 // ALL HAS BEEN DEPRECATED AND REPLACED BY MUSIC-LIST-SERVICE //

  // ----------------------------------------------------------------------------------------------------- //
  getLists(): Listas[] {
    return this.listas;
  }

  addNewSong(name: string, item: Item) {
    this.listas.forEach((itemLista) => {
      if ( itemLista.name === name ) {
        itemLista.items.push(item);
      }
    });
    this.guardarStorageListas();
  }

  createNewList(nameList, desc) {
    const newList: Listas = {
      name: nameList,
      description: desc,
      items: []
    };
    this.listas.push(newList);
    this.guardarStorageListas();
  }

  checkNameList(name: string): boolean {
    const item = this.listas.find( itemLista => {
      return itemLista.name === name;
    });
    if ( item === undefined) {
      return false;
    } else {
      return true;
    }
  }


  guardarStorageListas(): void {
    localStorage.setItem('myLists', JSON.stringify(this.listas));
  }

  cargarStorageListas(): void {
    if (localStorage.getItem('myLists')) {
      this.listas = JSON.parse(localStorage.getItem('myLists'));
    } else {
      this.listas = [];
    }
  }







// ----------------------------------------------------------------------------------------------------- //
// MANEJA LA LISTA PRINCIPAL DONDE SE ACUMULAN LAS CANCIONES QUE SERÁN REDIRIGIDAS A OTRAS LISTAS
  getLista(): Item[] {
    return this.lista;
  }

  addItem(item: Item): void {

    const item2 = this.lista.find( itemLista => {
      if ( itemLista.idTrack === item.idTrack ) { return true; } else { return false; }
    });

    if (item2 ) {
      console.log('item ya existe en la lista');
    } else {
      this.lista.push(item);
      this.guardarStorage();
    }

  }

  removeItem(item: Item): void {
    this.lista = this.lista.filter( itemLista => {
      return itemLista.name !== item.name;
    });
    this.guardarStorage();
  }

  guardarStorage(): void {
    localStorage.setItem('myList', JSON.stringify(this.lista));
  }

  cargarStorage(): void {
    if (localStorage.getItem('myList')) {
      this.lista = JSON.parse(localStorage.getItem('myList'));
    } else {
      this.lista = [];
    }
  }

  isAdded(item: Item): boolean {
    const item2 = this.lista.find( itemLista => {
      return itemLista.name === item.name;
    });
    if ( item2 === undefined) {
      return false;
    } else {
      return true;
    }
  }



}

export interface Item {
  name: string;
  idTrack: string;
}

export interface Listas {
  name: string;
  description: string;
  items: Item[];
}
