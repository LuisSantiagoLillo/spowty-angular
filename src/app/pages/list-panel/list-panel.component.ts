import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-panel',
  templateUrl: './list-panel.component.html',
  styleUrls: ['./list-panel.component.css']
})
export class ListPanelComponent implements OnInit {

  constructor(
    _listService: ListService
  ) { }

  ngOnInit() {
  }

}
