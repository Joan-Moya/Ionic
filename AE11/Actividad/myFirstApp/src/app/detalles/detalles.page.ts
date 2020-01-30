import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ArticuloServicio } from '../services/articulo.servicio';
import { IArticulo } from '../interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: number;
  res: IArticulo;
  Key: string="";
  articulo: object={};
  lista = [];

  constructor(private _activatedRoute: ActivatedRoute, private _ArticuloServicio : ArticuloServicio) {

    
   }

   
  ngOnInit() {
    this.Key = this._activatedRoute.snapshot.paramMap.get('key');
    console.log("he recibido un "+this.Key);
    /*this.res=  this._ArticuloServicio.getArticulo(this.id);
    console.log("El nombre es "+this.res.Nombre);
    console.log("El Precio es es "+this.res.Precio);*/

    let ref = this._ArticuloServicio.getArticulos().orderByKey().equalTo(this.Key);
    ref.once("value",snapshot =>{
      snapshot.forEach(child =>{
        this.articulo= child.val();
      })
    })
    

  }

  


}
