import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {
  num1:string='';
  num2:string='';
  resultado:number=0;
  operacion:string="";

  constructor() { }

  sumar():void{
    if (this.operacion=="s") {
      this.resultado=parseInt(this.num1)+parseInt(this.num2);
     
      
      
    }
    if (this.operacion=="m") {
      this.resultado=parseInt(this.num1)*parseInt(this.num2);
      
    }
    if (this.operacion=="r") {
      this.resultado=parseInt(this.num1)-parseInt(this.num2);
    }
    if (this.operacion=="d") {
      this.resultado=parseInt(this.num1)/parseInt(this.num2);
    }
    
  }
  
  operaciones():void{
    
    
  }
  ngOnInit(): void {
  }

}
