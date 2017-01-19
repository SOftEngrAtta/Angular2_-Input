import { Component, OnInit ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  templateUrl: './star-icon.component.html',
  styleUrls: ['./star-icon.component.css']
})
export class StarIconComponent implements OnInit { 
  isFavorite : boolean = true;

  // OutPut Method Call here 
 @Output()  change = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  showEmptyFullStarFunction(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      newValue : "Hello Atta"
    })  
  }
}
