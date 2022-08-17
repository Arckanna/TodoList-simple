import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent implements OnInit {
 

  allItems = [
    { description: 'Etudier Angular', done: true },
    { description: 'Faire un premier projet Angular', done: false },
    { description: 'Reviser l\'anglais', done: false },
    { description: 'Revoir la documentation d\'Angular ', done: false },
  ];

  get items() {    
      return this.allItems;        
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  deleteItem(index :any){
    this.items.splice(index, 1);
  }

  constructor() { }  

  ngOnInit(): void {
  }

}
