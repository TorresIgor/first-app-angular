import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nome="";
  idade=0;
  curso:string[] = {"C+","Java","SQL"};
  constructor() { }

  alteraNome(vl) {
    this.nome = vl;
  }

  ngOnInit(): void {
  }

}
