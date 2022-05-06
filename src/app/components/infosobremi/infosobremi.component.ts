import { Component, OnInit } from '@angular/core';
import { INFO } from 'src/app/mock-sobremi'; 
import { sobremi } from 'src/app/sobremi';

@Component({
  selector: 'app-infosobremi',
  templateUrl: './infosobremi.component.html',
  styleUrls: ['./infosobremi.component.css']
})
export class InfosobremiComponent implements OnInit {
  infor: sobremi[] = INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
