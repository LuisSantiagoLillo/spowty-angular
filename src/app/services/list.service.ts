import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  lista: Item[] = [];

  constructor() {
    this.cargarStorage();
  }

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
