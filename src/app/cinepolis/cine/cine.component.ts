import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  nombre:string='';
  NumC:number=0;
  Tarjeta:boolean=false;
  TarjetaN:boolean=false;
  NumCa:number=0;
  mensaje:string='';

  Total:number=0;
  Precio:number=0;
  DescNumC:number=0;
  DescNumCa:number=0;
  Max:boolean=false;

  condicion:number=0;

  constructor() { }

  operacion():void{
    this.condicion=8*this.NumC;
    if(this.NumC==0){
      this.mensaje='Maximo 7 personas por una persona'
    }
    if(this.NumC==1 && this.NumCa>=8){
      this.Max=true;
      
      this.DescNumC=0;
      this.NumC=0;
      this.NumCa=0;
     }
     else{
      this.Max=false;
     }
     if(this.NumC==2 && this.NumCa>=15){
      this.Max=true;
      prompt('Maximo 7 boletos por persona');
      this.NumC=0;
      this.NumCa=0;
     }
     else{
      this.Max=false;
     }
     if(this.NumC==3 && this.NumCa>=22){
      this.Max=true;
      prompt('Maximo 7 boletos por persona');
      this.NumC=0;
      this.NumCa=0;
     }
     else{
      this.Max=false;
     }
     if(this.NumC==4 && this.NumCa>=29){
      this.Max=true;
      prompt('Maximo 7 boletos por persona');
      this.NumC=0;
      this.NumCa=0;
     }
     else{
      this.Max=false;
     }
     if(this.NumC==5 && this.NumCa>=36){
      this.Max=true;
      prompt('Maximo 7 boletos por persona');
      this.NumC=0;
      this.NumCa=0;
     }
     else{
      this.Max=false;
     }

    if(this.Max==false){
     let BP:number=12;
     this.Precio=this.NumCa*BP;
    
     if(this.NumCa>=3 && this.NumCa<=5){
       let DescB:number=this.Precio*0.1;
       this.DescNumC=DescB;
       let PD:number=this.Precio-DescB;
       if(this.Tarjeta==true && this.TarjetaN==false){
        let DescT:number=PD*0.1;
        this.DescNumCa=DescT;
        this.Total=PD-this.DescNumCa;
       }
       else if(this.Tarjeta==false && this.TarjetaN==true){
        this.DescNumCa=0;
        this.Total=PD;
       }
       
     }
     else if(this.NumCa>5){
      let DescB:number=this.Precio*0.15;
       this.DescNumC=DescB;
       let PD:number=this.Precio-DescB;
       if(this.Tarjeta==true && this.TarjetaN==false){
        let DescT:number=PD*0.1;
        this.DescNumCa=DescT;
        this.Total=PD-this.DescNumCa;
       }
       else if(this.Tarjeta==false && this.TarjetaN==true){
        this.DescNumCa=0;
        this.Total=PD-this.DescNumC;
       }
     }
     else if(this.NumCa<3){
      let DescB:number=this.Precio*0;
       this.DescNumC=DescB;
       if(this.Tarjeta==true && this.TarjetaN==false){
        let DescT:number=this.Precio*0.1;
        this.DescNumCa=DescT;
        this.Total=this.Precio-this.DescNumCa;
       }
       else if(this.Tarjeta==false && this.TarjetaN==true){
        this.DescNumCa=0;
        this.Total=this.Precio-this.DescNumC;
       }
     }
    }
   
  }
  ngOnInit(): void {
  }

}
