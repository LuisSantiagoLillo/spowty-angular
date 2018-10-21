import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.css']
})
export class CommonErrorComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
