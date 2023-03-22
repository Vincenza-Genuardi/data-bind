import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent {
   /* numero: number = 9; */
   numero : number;
   classe_stile : string;
   stringa : string
   constructor(){
    this.numero = 9;
    this.classe_stile = "p-ita";
    this.stringa = "twowaybinding"
   }
   onAnchorClickAumenta(): number{
    this.numero = this.numero + 1
    return this.numero
   }

   onAnchorClickDiminuisci(): number{
    this.numero =this.numero-1
    return this.numero
   }
}
