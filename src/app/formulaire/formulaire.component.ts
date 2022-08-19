import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent implements OnInit {
 
  description=0;
  condition = false;
  indexRecupere=0;
  allItems = [
    { description: 'Etudier Angular', done: true },
    { description: 'Faire un premier projet Angular', done: false },
    { description: 'Reviser l\'anglais', done: false },
    { description: 'Revoir la documentation d\'Angular ', done: false },
  ];
  

  get items() {   
    if(localStorage.getItem('task')!= null ){      
      let newItems:any = localStorage.getItem('task');
      let result = JSON.parse(newItems);
      
     return JSON.parse(newItems);

    }else{
      localStorage.setItem('task',JSON.stringify(this.allItems));
      let newItems:any = localStorage.getItem('task');
      let result = JSON.parse(newItems);
      
     return JSON.parse(newItems);

    }

    
  }

  addItem(description: string) {
    let newItems:any = localStorage.getItem('task');
    let result = JSON.parse(newItems);
    result.unshift({
      description,
      done: false
    });    
    localStorage.setItem('task',JSON.stringify(result));
    
    
  }

  deleteItem(index :any){
    let newItems:any = localStorage.getItem('task');
    let result = JSON.parse(newItems);
    result.splice(index, 1);
    localStorage.setItem('task',JSON.stringify(result));

  }
  recupItem(index :any){
    let newItems:any = localStorage.getItem('task');
    let result = JSON.parse(newItems);
    this.indexRecupere = index;
    this.description = result[index].description;
    console.log(result);
    this.condition = true;
  }
  modifyItem(description:string){
    let newItems:any = localStorage.getItem('task');
    let result = JSON.parse(newItems);
    result[this.indexRecupere]={
      description,
      done: false
    };    
    localStorage.setItem('task',JSON.stringify(result));
    this.condition=false;

  }

  constructor( ) { }  

  ngOnInit(): void {

  }

}
