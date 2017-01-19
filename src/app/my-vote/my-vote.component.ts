import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-my-vote',
  templateUrl: './my-vote.component.html',
  styleUrls: ['./my-vote.component.css']
})
export class MyVoteComponent implements OnInit {
  @Input() voteCount : number = 10
  @Input() myVote : boolean = false; 
  isActiveUp : boolean = false;
  isActiveDown : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  myVoteUpFunction(event){
    this.isActiveUp = true;
    this.isActiveDown = false;
    if(this.myVote == false){
      this.myVote = !this.myVote;
      this.voteCount += this.myVote ? 1 : 0;        
    }
  }
  myVoteDownFunction(event){
    if(this.myVote == true){
      this.voteCount =this.voteCount -1;    
      this.myVote = false;
      this.isActiveDown = true;
      this.isActiveUp = false;
    }
  }
}
