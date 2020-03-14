import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  title:string = "Let's play Tic-Tac-Toe"
  constructor() { }

  ngOnInit(): void {
  }

}
