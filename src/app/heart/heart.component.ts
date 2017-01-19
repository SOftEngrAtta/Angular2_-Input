import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {
  @Output() increamentData = new EventEmitter;
  isFavourite : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  likeAndDisLikeHeartFunction(){
    this.isFavourite = !this.isFavourite;
    this.increamentData.emit({
      newValue :   this.isFavourite
    })
  }
}
