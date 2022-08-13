import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  boton1 = "Login"

  constructor() { }

  ngOnInit(): void {
  }

onClick(){
  alert("Ay! Me hiciste click 🥺");
}

}
