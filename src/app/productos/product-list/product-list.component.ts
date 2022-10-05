import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  Productos:IProducto[]=[
    {
      "productosId":1,
      "modelo":'sentra',
      "descripcion":"auto 4 puertas",
      "marca":'Nissan',
      "year":"febrero 3 2020",
      "precio":250000,
      "puntos":3.5,
      "ImagenUrl":"https://www.informador.mx/__export/1591376300172/sites/elinformador/img/2020/06/05/nissan-sentra-2020-1600-0c_1_crop1591376299435.jpg_1970638775.jpg"
    },
    {
      "productosId":2,
      "modelo":'Kia',
      "descripcion":"auto 4 puertas",
      "marca":'Kia',
      "year":"febrero 28 2010",
      "precio":150000,
      "puntos":4.5,
      "ImagenUrl":"https://motor.elpais.com/wp-content/uploads/2021/12/NUEVOKIARIO-CALIDADALTA_001.jpg"
    },
    {
      "productosId":3,
      "modelo":'Lobo',
      "descripcion":"auto 4 puertas",
      "marca":'Ford',
      "year":" december 28 2022",
      "precio":350000,
      "puntos":5.0,
      "ImagenUrl":"https://acnews.blob.core.windows.net/imgnews/medium/NAZ_17c3a42451f9407cb6c127afc777af96.jpg"
    },
    
  ]
  constructor() { }

  ShowImagen():void{
     this.muestraImg= !this.muestraImg;
  }

  ngOnInit(): void {
  }

}
