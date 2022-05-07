import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  variable:string="Es una variable";

  
  texto(mensaje:string):string{
    return mensaje;
  }



  
}
