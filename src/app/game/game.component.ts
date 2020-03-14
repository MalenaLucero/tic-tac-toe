import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cells:Array<string> = ['', '', '', '', '', '', '', '', '']
  currentPlayer:string = 'o'
  won:boolean = false
  winningPatterns = [
    //horizontal
    [[0,1,2],[3,4,5],[6,7,8]],
    //vertical
    [[0,3,6],[1,4,7],[2,5,8]],
    //diagonal
    [[0,4,8],[2,4,6]]
  ]

  constructor() { }

  ngOnInit(): void {
  }
  newGame():void{
    this.cells = ['', '', '', '', '', '', '', '', '']
    this.currentPlayer = 'o'
  }
  changePlayer():void{
    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x'
  }
  fillCell(id:number):void{
    if(this.cells[id] === '' && !this.checkWinning()){
      this.changePlayer()
      this.cells[id] = this.currentPlayer
      if(this.checkWinning()) console.log('you won!')
    }
  }
  checkWinning():boolean{
    let winningPattern: [boolean, boolean, boolean]
    let isGameOver:boolean = false
    this.winningPatterns.forEach(direction=>{
      for(let pattern of direction){
        winningPattern = [false, false, false]
        pattern.forEach((num,index)=>{
          winningPattern[index] = this.cells[num] === this.currentPlayer ? true : false
          if(winningPattern[0] && winningPattern[1] && winningPattern[2]) isGameOver = true
        })
      }
    })
    return isGameOver
  }
  
}
