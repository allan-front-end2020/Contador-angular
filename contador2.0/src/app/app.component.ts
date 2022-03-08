import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador2.0';


  constructor( ){}
  numero:number = 0

  soma(){
    this.numero +=1
  }

  diminuir(){
    this.numero -=1
  }



  ngOninit():void{

  }
}

