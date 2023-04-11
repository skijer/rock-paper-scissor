import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rock-paper-scissor';
  bonus=false;
  phone=false;
  score=0;
  housepick=0;
  playing=false;
  playerpick=0;
  win=false;
  ngOnInit(): void {
    this.phone=window.screen.width<768;
  }
  mode(){
    this.bonus=!this.bonus;
  }
  ///s:0,r:2,p:1,l:3,a:4
  play(choose:number){
    this.playerpick=choose;
    this.housepick=!this.bonus?Math.floor(Math.random() * 3):Math.floor(Math.random() * 5)
    console.log(this.playerpick);
    console.log(this.housepick);
    this.playing=true;
    if(this.housepick==choose){
    }else{
        if((this.playerpick+1)%5==this.housepick || (this.playerpick+3)%5==this.housepick){
          this.score++;
          this.win=true;
        }else{
          this.score--;
          this.win=false;
        }
      }
  }
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
