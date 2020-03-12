import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  nome="";
  visivel:boolean = false;
    constructor() { }
  mostrar (){
    this.visivel= !this.visivel;
  }

  ngOnInit(): void {
  }

}
