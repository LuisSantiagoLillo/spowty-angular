import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicListService, Lists } from '../../../services/music-list.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  listName: string = '';
  listSelected: Lists;

  constructor(
    private router: ActivatedRoute,
    private listService: MusicListService
  ) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.listName = params.id;
      this.listSelected = this.listService.getList(params.id);
      console.log(this.listSelected);
    });
  }

}
