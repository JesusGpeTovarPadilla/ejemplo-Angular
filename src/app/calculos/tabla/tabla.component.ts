import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  numero:string='';
  resultado:string='';
  total:string[]=[];


  constructor() { }

  ngOnInit(): void {
  }
  tabla():void{
    let i:number;
    let multi:number;
    for(i=0;i<=10;i++){
      multi=parseInt(this.numero)*i;
      this.resultado=this.numero + " x " + i + "= " + multi;
      this.total.push(this.resultado);

    }
  }

 

}
