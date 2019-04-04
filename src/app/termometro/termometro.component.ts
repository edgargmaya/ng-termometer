import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'termometro',
  templateUrl: './termometro.component.html',
  styleUrls: ['./termometro.component.css']
})
export class TermometroComponent implements OnInit, OnChanges {

  claseColor: string = 'verde';
  tmpLabel: number;
  
  ngOnChanges( param ){
    this.checkTmp();
  }

  @Input('nuevaetiqueta')
  private temperatura: number;

  constructor(){ }

  ngOnInit() {
    console.log( "La tmp es: " + this.temperatura );
    this.tmpLabel = this.temperatura;
  }

  checkTmp(){

    if( this.temperatura > 100 )
      return;

    if( this.temperatura <= 50 ){
      this.claseColor = 'verde';
    } else if( this.temperatura <= 75 ){
      this.claseColor = 'amarillo';
    } else {
      this.claseColor = 'rojo';
    }

    this.tmpLabel = this.temperatura;

  }

}
