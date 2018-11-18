import { Component, OnInit } from '@angular/core';
import { FirebaseLinksService } from '../../services/firebase-links.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cont: number = 1;
  bounce: boolean = true;
  mainConcepts = [];

  mainConceptsAdd = [
    '',
    'Angular 2-6 and VirtualScroll from Angular 7 :0)',
    'Single Page App',
    'API RestFull',
    'Bootstrap 4 + FontAwesome',
    'FireBase Database',
    'Firebase Authentication - Google & Twitter & Facebook'
  ];

  constructor(public _linkService: FirebaseLinksService) {
    this.changeCont();
  }

  ngOnInit() {
  }

  changeCont() {
      setInterval(() => {
        this.mainConcepts.push(this.mainConceptsAdd[this.cont]);
        if (this.cont > 6) {
          this.cont = 0;
          this.mainConcepts = [];
        }
        this.cont++;
        this.bounce = !this.bounce;
      }, 4000);
  }




  changeOut2() {
    setInterval(() => {
      this.cont++;
      if (this.cont > 6) {
        this.cont = 0;
      }
    }, 2000);
  }

}
