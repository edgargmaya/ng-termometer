import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    setInterval( ()=>{
      this.temperaturaControlada++;
      this.temperaturaControlada2++;
    }, 255 );
  }

  temperaturaControlada: number = 10;
  temperaturaControlada2: number = 10;

  subirTmp(){
    this.temperaturaControlada++;
  }

  bajarTmp(){
    this.temperaturaControlada--;
  }

}
