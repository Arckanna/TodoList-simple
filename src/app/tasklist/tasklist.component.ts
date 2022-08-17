import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  public items = [{ description: 'exemple1', done: true },
  { description: 'exemple2', done: false },
  { description: 'exemple3', done: false },
  { description: 'exemple4', done: false },]; 

  constructor() { }

  
  ngOnInit(): void {
  }

}
